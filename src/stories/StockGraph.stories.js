import StockGraph from "../components/StockGraph";


export default {
  title: "StockGraph",
  component: StockGraph
};

const Template = (args) => <StockGraph {...args}/>;

export const Regular = Template.bind({});
Regular.args = {width:1500, height:500};