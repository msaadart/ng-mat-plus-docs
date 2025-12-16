import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Injectable, signal, computed, DestroyRef } from '@angular/core';
import { Router, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class LibBreadcrumbService {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly customLabels = signal<Map<string, string>>(new Map());
  private readonly lastNavigation = signal<NavigationEnd | null>(null);

  readonly breadcrumbs = computed(() => {
    this.lastNavigation();
    this.customLabels();
    return this.createBreadcrumbs(this.router.routerState.snapshot.root);
  });

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(event => this.lastNavigation.set(event));
  }

  setCustomLabel(id: string, label: string): void {
    this.customLabels.update(labels => {
      const map = new Map(labels);
      map.set(id, label);
      return map;
    });
  }

  resetCustomLabel(id: string): void {
    this.customLabels.update(labels => {
      const map = new Map(labels);
      map.delete(id);
      return map;
    });
  }

  private createBreadcrumbs(
    route: ActivatedRouteSnapshot,
    url: string = '',
    breadcrumbs: Breadcrumb[] = []
  ): Breadcrumb[] {
    const routeURL = route.url.map(segment => segment.path).join('/');
    if (routeURL) {
      url += `/${routeURL}`;
    }

    const idParamKey = Object.keys(route.params).find(k =>
      k.toLowerCase().endsWith('id')
    );
    const routeId = idParamKey ? route.params[idParamKey] : undefined;

    const label =
      (routeId && this.customLabels().get(routeId)) ??
      route.data?.['breadcrumb'] ??
      (routeId ? `Item ${routeId}` : undefined);

    if (label && !breadcrumbs.some(b => b.url === url)) {
      breadcrumbs.push({ label, url });
    }

    for (const child of route.children) {
      this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
 
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="p-4 border rounded-md ">
      <div class="flex items-center flex-wrap gap-2">
        @for (bc of breadcrumbService.breadcrumbs(); track bc.url) {
          <a class="px-2 py-1 rounded-md      text-blue-700 hover:bg-gray-200" [routerLink]="bc.url">{{ bc.label }}</a>
          <span class="text-gray-400">›</span>
        }
      </div>
    </nav>
  `,
  styles: ``
})
export class BreadcrumbComponent {
  breadcrumbService = inject(LibBreadcrumbService);
}
