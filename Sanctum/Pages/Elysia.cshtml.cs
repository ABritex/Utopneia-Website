using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Sanctum.Pages
{
    public class ElysiaModel : PageModel
    {
        public void OnGet()
        {
            ViewData["ElysiaIconUrl"] = "/images/icons/elysia.png";
        }
    }
}
