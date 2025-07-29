# UI Development Guidelines

## shadcn/ui Integration

When building or modifying user interfaces, **always use shadcn/ui MCP server** for components and blocks.

### Discovery Process
1. **List Available Assets**: Use `list_components()` and `list_blocks()` to see all available UI elements
2. **Analyze Requirements**: Map user's UI needs to available shadcn assets
3. **Prioritize Blocks**: Use `get_block(block_name)` for complex, common UI patterns (login pages, calendars, dashboards)
4. **Use Components**: Use `get_component(component_name)` for smaller, specific UI needs

### Implementation Workflow
1. **Get Demo First**: Always call `get_component_demo(component_name)` before using any component
   - Critical for understanding component usage
   - Shows required props and structure
   - Provides implementation examples

2. **Retrieve Code**: Get the actual component/block code
   - `get_block(block_name)` for complex patterns
   - `get_component(component_name)` for individual elements

3. **Integrate & Customize**: 
   - Integrate retrieved code into the application
   - Customize with necessary props and logic
   - Adapt to fulfill specific user requirements

### Priority Order
1. **Blocks** - For complex, common patterns (dashboards, login forms, calendars)
2. **Components** - For specific, smaller UI elements
3. **Custom** - Only when shadcn doesn't provide suitable options

### Best Practices
- Always check demos before implementation
- Customize props and styling to match application needs
- Follow shadcn/ui patterns and conventions
- Ensure accessibility compliance
- Test component integration thoroughly

This approach ensures consistent, high-quality UI development using proven shadcn/ui patterns.