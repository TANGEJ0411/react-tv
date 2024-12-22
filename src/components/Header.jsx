import { mdiPlayOutline } from "@mdi/js"
import Icon from "@mdi/react"


function Header() {
  return (
    <header className="h-header-height bg-background transition-all duration-500 sticky top-0 z-20">
        <nav className="p-3 flex items-center">
          <div className="flex items-center space-x-2">
            <Icon path={mdiPlayOutline} color={'green'} size={1.5}/>
            <h1 className="text-white text-l font-bold">REACT VIDEO</h1>
          </div>
        </nav>
    </header>
  )
}

export default Header