var NetworkService=function() {
NetworkService.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
NetworkService.prototype={
showInfo:function(internalAddress,succeededCallback, failedCallback, userContext) {
return this._invoke(NetworkService.get_path(), 'showInfo',false,{internalAddress:internalAddress},succeededCallback,failedCallback,userContext); }}
NetworkService.registerClass('NetworkService',Sys.Net.WebServiceProxy);
NetworkService._staticInstance = new NetworkService();
NetworkService.set_path = function(value) { NetworkService._staticInstance._path = value; }
NetworkService.get_path = function() { return NetworkService._staticInstance._path; }
NetworkService.set_timeout = function(value) { NetworkService._staticInstance._timeout = value; }
NetworkService.get_timeout = function() { return NetworkService._staticInstance._timeout; }
NetworkService.set_defaultUserContext = function(value) { NetworkService._staticInstance._userContext = value; }
NetworkService.get_defaultUserContext = function() { return NetworkService._staticInstance._userContext; }
NetworkService.set_defaultSucceededCallback = function(value) { NetworkService._staticInstance._succeeded = value; }
NetworkService.get_defaultSucceededCallback = function() { return NetworkService._staticInstance._succeeded; }
NetworkService.set_defaultFailedCallback = function(value) { NetworkService._staticInstance._failed = value; }
NetworkService.get_defaultFailedCallback = function() { return NetworkService._staticInstance._failed; }
NetworkService.set_path("http://ip.dxing.si/gadget/vista/NetworkService.php");
NetworkService.showInfo= function(internalAddress,onSuccess,onFailed,userContext) {NetworkService._staticInstance.showInfo(internalAddress,onSuccess,onFailed,userContext); }
