import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo"
import "./home.css";
import { useData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
       <FeaturedInfo/>
       <Chart data={useData} title="User Analytics" grid dataKey="Active User" />
       <div className="homeWidgets">
         <WidgetSm/>
         <WidgetLg/>
       </div> 
    </div>
  );
}
