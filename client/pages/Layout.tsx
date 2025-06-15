import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
