"use client";

import { ExampleSheetWithStacking, ExampleSheetWithStackingControlled } from "@/components/examples/SheetWithStacking/ExampleSheetWithStacking";
import { ExampleSheetWithStackingData } from "@/components/examples/SheetWithStacking/ExampleSheetWithStackingData";

type ExampleProps = {
  
}

function Example(_props: ExampleProps) {
  return (
    <>
      <ExampleSheetWithStacking data={ExampleSheetWithStackingData} />
      <ExampleSheetWithStackingControlled data={ExampleSheetWithStackingData} />
    </>
  );
}

export default Example;
