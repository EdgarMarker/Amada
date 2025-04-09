import "../../styles/nav.css";
import type { Company } from "../../_types/company";
import type { Page } from "../../_types/page";
import CloseNav from "../ui/btn/CloseNav";
import OpenNav from "../ui/btn/OpenNav";
import ScrollTo from "../ui/btn/ScrollTo";
import WhatsAppBtn from "../ui/btn/WhatsAppBtn";
import OptimizedImage from "../ui/img/OptimizedImg";

interface NavProps {
  dataPage: Page;
  dataCompany: Company;
}

interface NavListItem {
  name: string;
  boolean: boolean;
  id: number;
}
const Nav = ({ dataPage: dataPage, dataCompany: dataCompany }: NavProps) => {

  const navListItems: NavListItem[] = Object.entries(dataPage)
    .filter(([key, value]) => value && value.setNav !== undefined && value)
    .map(([Key, value]) => ({
      id: value.id,
      name: value.nameNav,
      boolean: value.setNav,
    }));

  const sortedNavItems = navListItems.sort((a, b) => a.id - b.id);

  return (
    <header id="header" >
      <nav className="desktop">
        <a className="logo" href="/">
          <OptimizedImage
            src={dataCompany.imgNav.media.url}
            alt={dataCompany.imgNav.alt.altText}
            desktopWidth={1200}
            tabletWidth={800}
            mobileWidth={400}
          />
        </a>
        <ul>
          {sortedNavItems.map(
            (item) =>
              item.boolean && (
                <li>
                  <ScrollTo className="btn__nav" idToScroll={item.name}>
                    {item.name}
                  </ScrollTo>
                </li>
              )
          )}
          <li>
            <ScrollTo className="btn__nav" classToScroll="footer">
              contacto
            </ScrollTo>
          </li>
        </ul>
        <WhatsAppBtn data={dataCompany.contact.wp} />
      </nav>
      <nav className="mobile">
        <div className="mobile__header">
          <a className="logo" href="/">
            <OptimizedImage
              src={dataCompany.imgNav.media.url}
              alt={dataCompany.imgNav.alt.altText}
              desktopWidth={1200}
              tabletWidth={800}
              mobileWidth={400}
            />
          </a>
          <OpenNav />
        </div>
      </nav>
      <nav className="mobileActive">
        <div className="mobile__header navItem">
          <a className="logo" href="/">
            <OptimizedImage
              src={dataCompany.imgNav.media.url}
              alt={dataCompany.imgNav.alt.altText}
              desktopWidth={1200}
              tabletWidth={800}
              mobileWidth={400}
            />
          </a>
          <CloseNav />
        </div>
        <ul className="navItem">
          {sortedNavItems.map(
            (item) =>
              item.boolean && (
                <li>
                  <ScrollTo className="btn__nav" idToScroll={item.name}>
                    {item.name}
                  </ScrollTo>
                </li>
              )
          )}
          <li>
            <ScrollTo className="btn__nav" classToScroll="footer">
              contacto
            </ScrollTo>
          </li>
        </ul>
        <WhatsAppBtn data={dataCompany.contact.wp} />
      </nav>
    </header>
  );
};
export default Nav;
