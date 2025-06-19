import { Home, Inbox, Calendar, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
const sidebarItems = [
  {
    id: 1,
    title: "Anasayfa",
    url: "/",
    icon: Home,
    nested: false,
  },
  {
    id: 2,
    title: "Pazaryerleri",
    url: "/pazaryerleri",
    icon: Inbox,
    nested: true,
    nest: [{ title: "Trendyol", url: "/trendyol-tum-urunler" }],
  },
  {
    id: 3,
    title: "Siparişler",
    url: "/siparisler",
    icon: Calendar,
    nested: true,
    nest: [{ title: "Tüm Siparişler", url: "/tum-siparisler" }],
  },
  {
    id: 4,
    title: "CRM",
    url: "/crm",
    icon: Search,
    nested: false,
  },
  {
    id: 5,
    title: "Ayarlar",
    url: "/ayarlar",
    icon: Settings,
    nested: false,
  },
  {
    id: 6,
    title: "Markalar",
    url: "/markalar",
    icon: Settings,
    nested: false,
  },
  {
    id: 7,
    title: "Kategoriler",
    url: "/kategoriler",
    icon: Settings,
    nested: false,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image src="/logo.svg" alt="logo" width={20} height={20} />
                <span>Lama Dev</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item, idx) =>
                item.nested === true && item.nest ? (
                  <Collapsible
                    key={idx}
                    defaultOpen
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <Link href={`${item.url}`}>{item.title}</Link>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {Array.isArray(item.nest) &&
                            item.nest.map((subItem, index) => (
                              <SidebarMenuSubItem key={index}>
                                <Link href={`${item.url}${subItem.url}`}>
                                  {subItem.title}
                                </Link>
                              </SidebarMenuSubItem>
                            ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    {item.title === "Inbox" && (
                      <SidebarMenuBadge>24</SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
