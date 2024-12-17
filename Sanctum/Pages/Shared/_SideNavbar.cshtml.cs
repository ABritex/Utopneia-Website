using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Sanctum.Pages.Shared
{
    public class _SideNavbarModel : PageModel
    {
        private readonly IUrlHelper _urlHelper;

        public _SideNavbarModel(IUrlHelper urlHelper)
        {
            _urlHelper = urlHelper;
        }

        // Determine the CSS class for an active link
        public string GetNavClass(string page)
        {
            var currentPage = _urlHelper.ActionContext.RouteData.Values["Page"]?.ToString();
            return currentPage == page ? "active" : "";
        }

        public void OnGet()
        {
        }
    }
}
