import React from "react";
import BrowseContainer from "../containers/browse";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  // we need series and films tabs/navigation
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });

  // we need slider
  // pass it to the browse container

  return <BrowseContainer slides={slides} />;
}
