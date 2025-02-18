import Folder from "../Folder";

export default function AboutSidebar() {
  const notepad = [
    { name: "biography", icon: "text" },
    { name: "education", icon: "text" },
    { name: "experience", icon: "text" },
    { name: "hobby", icon: "text" },
    { name: "languages", icon: "text" },
    { name: "soft-skills", icon: "text" },
  ];

  return <Folder items={notepad} title='general-info' open />;
}
