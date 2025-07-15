// Simple debug script to check for undefined values
const fs = require('fs');

// Read the script.js file
const scriptContent = fs.readFileSync('script.js', 'utf8');

// Extract the projects array (simplified approach)
eval(scriptContent);

console.log('=== DEBUGGING PROJECT DATA ===\n');

projects.forEach((project, index) => {
    console.log(`PROJECT ${index + 1}: ${project.title || 'UNNAMED'}`);
    console.log(`  ID: ${project.id || 'UNDEFINED'}`);
    console.log(`  Title: ${project.title || 'UNDEFINED'}`);
    console.log(`  Date: ${project.date || project.year || 'UNDEFINED'}`);
    console.log(`  Category: ${project.category || 'UNDEFINED'}`);
    console.log(`  Tools: ${project.tools || 'UNDEFINED'}`);
    console.log(`  Logo: ${project.logo || 'UNDEFINED'}`);
    console.log(`  Links: ${project.links ? project.links.length + ' links' : 'UNDEFINED'}`);
    console.log(`  Description: ${project.description ? 'EXISTS' : 'UNDEFINED'}`);
    
    if (project.details) {
        console.log(`  Details.subtitle: ${project.details.subtitle || 'UNDEFINED'}`);
        console.log(`  Details.cover_image: ${project.details.cover_image || 'UNDEFINED'}`);
        
        if (project.details.sections) {
            console.log(`  Details.sections: ${project.details.sections.length} sections`);
            
            // Check format
            const sections = project.details.sections;
            const isNewFormat = sections.length > 0 && sections[0] && sections[0].hasOwnProperty('heading');
            console.log(`  Format: ${isNewFormat ? 'NEW (heading/text/images)' : 'OLD (id/title/content)'}`);
            
            sections.forEach((section, i) => {
                if (!section) {
                    console.log(`    Section ${i}: NULL/UNDEFINED`);
                } else if (isNewFormat) {
                    console.log(`    Section ${i}: heading="${section.heading || 'UNDEFINED'}", text="${section.text ? 'EXISTS' : 'UNDEFINED'}", images=${section.images ? section.images.length : 'UNDEFINED'}`);
                } else {
                    console.log(`    Section ${i}: id="${section.id || 'UNDEFINED'}", title="${section.title || 'UNDEFINED'}", content="${section.content ? 'EXISTS' : 'UNDEFINED'}"`);
                }
            });
        } else {
            console.log(`  Details.sections: UNDEFINED`);
        }
    } else {
        console.log(`  Details: UNDEFINED`);
    }
    
    console.log('');
});

console.log('=== CHECKING FOR POTENTIAL ISSUES ===\n');

// Check for common issues
projects.forEach((project, index) => {
    const issues = [];
    
    if (!project.id) issues.push('Missing ID');
    if (!project.title) issues.push('Missing title');
    if (!project.category) issues.push('Missing category');
    if (!project.tools) issues.push('Missing tools');
    if (!project.date && !project.year) issues.push('Missing date/year');
    
    if (project.details) {
        if (project.details.sections) {
            project.details.sections.forEach((section, i) => {
                if (!section) {
                    issues.push(`Section ${i} is null/undefined`);
                } else {
                    const hasHeading = section.hasOwnProperty('heading');
                    const hasTitle = section.hasOwnProperty('title');
                    const hasId = section.hasOwnProperty('id');
                    
                    if (hasHeading && (!section.heading)) {
                        issues.push(`Section ${i} has empty heading (new format)`);
                    }
                    if (hasTitle && (!section.title)) {
                        issues.push(`Section ${i} has empty title (old format)`);
                    }
                    if (hasId && (!section.id)) {
                        issues.push(`Section ${i} has empty id (old format)`);
                    }
                    if (!hasHeading && !hasTitle) {
                        issues.push(`Section ${i} has neither heading nor title`);
                    }
                }
            });
        }
    }
    
    if (issues.length > 0) {
        console.log(`❌ ${project.title || 'Project ' + (index + 1)} has issues:`);
        issues.forEach(issue => console.log(`  - ${issue}`));
        console.log('');
    }
});

console.log('Debug complete.');