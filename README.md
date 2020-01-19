### Network.Gadget
Network Gadget is a gadget for Window 7 that displays your public IP Adress and ISP you are using

It was previosly developed by this guy: https://github.com/kirkouimet

but the api the widget used went down, so I recreated the api and made this widget usable again

#### API folder 
includes the gadget api
* Copy this to your website and change the link to it in proxy.js 
 ```js
NetworkService.set_path("http://ip.dxing.si/gadget/vista/NetworkService.php"); 
``` 
#### Gadget folder 
includes the gadget files