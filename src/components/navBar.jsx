import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className=" w-[500px] md:w-[70vw] flex items-center  text-white h-[90px] px-10 rounded-lg">
        <div className=" flex space-x-4  w-full justify-between items-center h-full">
          <NavigationMenuItem>
            <NavigationMenuLink href="#home" className="hover:text-teal ">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#about" className="hover:text-teal">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#skills" className="hover:text-teal">
              Skills
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#projects" className="hover:text-teal">
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div className="h-[50px] hover:bg-white flex justify-center items-center w-[170px] rounded-lg bg-popover">
              <NavigationMenuLink
                href="../assets/cv.pdf"
                download="Edith-Resume"
                className="hover:text-teal"
              >
                Download Resume
              </NavigationMenuLink>
            </div>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
