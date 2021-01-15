import { storiesOf } from "@storybook/react";
import DashCard from "../components/DashCard";
import StockGraph from "../components/StockGraph";
import "../fontawesome";

storiesOf("Dashboard Card Holder", module)
  .addParameters({})
  .add("Empty", () => <DashCard/>)
  .add("With StockGraph inside", () => <DashCard><StockGraph width={1000} height={300}/></DashCard>)