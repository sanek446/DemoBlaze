﻿function TC_01(browserStr)
{
  //Navigate to URL
  Browsers.Item(browserStr).Run("https://www.demoblaze.com/index.html");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageStore;
  //Click on Laptops
  page.linkItemc.Click();
  //Click on MacBook
  page.textnodeMacbookAir.linkMacbookAir.Click();
  page = browser.pageStore2;
  //Verify price
  aqObject.CheckProperty(page.textnode700, "contentText", cmpEqual, "$700\n*includes tax");
  //Verify description
  aqObject.CheckProperty(page.textnode, "contentText", cmpEqual, "1.6GHz dual-core Intel Core i5 (Turbo Boost up to 2.7GHz) with 3MB shared L3 cache Configurable to 2.2GHz dual-core Intel Core i7 (Turbo Boost up to 3.2GHz) with 4MB shared L3 cache.");
  //Verify "Add to cart" button
  aqObject.CheckProperty(page.linkAddToCart, "contentText", cmpEqual, "Add to cart");
}

//run TC_01 in Chrome
function TC_01_Chrome()
{
  
TC_01(btChrome)

}


//run TC_01 in Edge
function TC_01_Edge()
{
  
TC_01(btEdge)

}
