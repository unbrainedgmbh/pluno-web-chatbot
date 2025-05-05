# pluno-web-chatbot
This package provides a react component to easily integrate Pluno's web chatbot in your react app.

Here's a comprehensive guide how to integrate the chatbot in your app using this package:
https://awesome-qa.notion.site/Web-chatbot-integration-developer-manual-ede86d862c964076b90569957a79bef4?pvs=4

For general information about Pluno and ways to contact us, please visit our website:
https://pluno.ai


## Example code

```
import PlunoWebChatbot, { PlunoWebChatbotConfig } from "pluno-web-chatbot";
...
const config: PlunoWebChatbotConfig = { theme: "dark", primaryColor: "#FFFF00", widgetButtonPxSize: 56 };
...
<...>
	<... />
	<PlunoWebChatbot communityId="COMMUNITY_ID" config={config} />;
</...>
```