import Chart from "../components/profile/Chart";
import Content from "../components/profile/Content";
import SideBar from "../components/profile/SideBar";

export default function Profile() {
  return (
    <article className="flex flex-col md:flex-row h-full gap-5 p-5 mb-20 lg:mb-0 text-white">
      <SideBar />
      <section className="w-full h-full grid md:grid-cols-2 *:col-span-1 rounded-lg p-2 backdrop-blur-md shadow shadow-white">
        <Chart />
        <Content />
      </section>
    </article>
  );
}
