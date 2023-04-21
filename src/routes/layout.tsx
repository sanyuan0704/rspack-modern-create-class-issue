import { Outlet } from '@modern-js/runtime/router';
import hl from 'highlight.js';

// eslint-disable-next-line no-console
console.log(hl);
export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
