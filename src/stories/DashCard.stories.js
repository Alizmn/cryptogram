import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import DashCard from "../components/DashCard";
import StockGraph from "../components/StockGraph";
import "../fontawesome";

storiesOf("Dashboard Card Holder", module)
  .addParameters({})
  .add("Empty", () => <DashCard/>)
  .add("With Title", () => <DashCard title={"Best Card Ever"}/>)
  .add("With StockGraph inside", () => <DashCard button onWeek={action("Week-clicked")} onMonth={action("Month-clicked")} onYear={action("Year-clicked")} onMax={action("Max-clicked")} info={action("info-clicked")} ><StockGraph width={1000} height={300}/></DashCard>)