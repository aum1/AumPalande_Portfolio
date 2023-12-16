import Contacts from "./Contacts"
import SideNavigation from "./SideNavigation"

const SelfInformation = () => {
    return (
        <div>
            <div className="w-1/3">
                <Contacts />
                <SideNavigation />
            </div>

            <div className="w-2/3">

            </div>
        </div>
    )
}

export default SelfInformation