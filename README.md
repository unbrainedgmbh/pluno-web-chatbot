# awesome-web-chatbot
This package provides a react component to easily integrate AwesomeQA's web chatbot in your react app.

Here's a comprehensive guide how to integrate the chatbot in your app using this package:
https://awesome-qa.notion.site/Web-chatbot-integration-developer-manual-ede86d862c964076b90569957a79bef4?pvs=4

For general information about AwesomeQA and ways to contact us, please visit our website:
https://awesomeqa.xyz


## Example code

```
import AwesomeWebChatbot, { AwesomeWebChatbotConfig } from "awesome-web-chatbot";
...
const config: AwesomeWebChatbotConfig = { theme: "dark", primaryColor: "#FFFF00", widgetButtonPxSize: 56 };
...
<...>
	<... />
	<AwesomeWebChatbot communityId="COMMUNITY_ID" config={config} />;
</...>
```