using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace TodoList
{
    public class TodoItem
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsDone { get; set; }
    }
}
