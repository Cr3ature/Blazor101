function logToConsole(message) {
    console.log("invoked from C# : " + message);
}

function dotnetStaticInvocation() {
    DotNet.invokeMethodAsync("BlazorWasmApp.Client", "GetTotalAdded")
        .then(result => {
            console.log("Count triggered from javascript is " + result);
        });
}

function dotnetInstanceInvocation(dotnetHelper) {
    dotnetHelper.invokeMethodAsync("AddAlert");
}