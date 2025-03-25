// This is a utility script to check all components for potential issues
// 1. Make sure all components that use hooks have "use client" directive
// 2. Check for syntax errors in the section elements

import fs from "fs"

function checkComponent(component) {
  const content = fs.readFileSync(component, "utf8")

  // Check if component uses hooks but doesn't have "use client"
  const usesHooks = /use[A-Z]/.test(content)
  const hasUseClient = /['"]use client['"]/.test(content)

  if (usesHooks && !hasUseClient) {
    console.log(`Component ${component} uses hooks but doesn't have "use client" directive`)
  }

  // Check for syntax errors in section elements
  const hasSectionSyntaxError = /section[\s\n]*[^\s<>=]/.test(content)

  if (hasSectionSyntaxError) {
    console.log(`Component ${component} might have syntax error in section element`)
  }
}

// Run this for all components in the project

