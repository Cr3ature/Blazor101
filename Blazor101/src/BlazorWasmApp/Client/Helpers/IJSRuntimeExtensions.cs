using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace BlazorWasmApp.Client.Helpers
{
    public static class IJSRuntimeExtensions
    {
        public static async ValueTask<bool> Confirm(this IJSRuntime js, string message)
            => await js.InvokeAsync<bool>("confirm", message);

    }
}