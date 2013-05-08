/***********************************************\
 * Create_Div                                  *
 * ------------------------------------------- *
 *  container                                  *
 *  id                                         *
 *  classes (array)                            *
\***********************************************/
function Create_Div(divArray){
    /*
    divArray = {
        targetContainer: 'two_part_assessors',
        mainID: 'project_background_assessors',
        labelText: 'Assessor(s) Name:',
        required: true,
        inputType: text,
        extraContainerClasses: ['container_class'],
        extraLabelClasses: ['label_class'],
        extraContentClasses: ['content_class'],
        extraInputClasses: ['input_class'],
        changeDiv: 'textarea'
    };
    */
    var tempBuild = "",
        containerClassesLength,
        labelClassesLength,
        contentClassesLength,
        inputClassesLength,
        compiledContainerClasses = "",
        compiledLabelClasses = "",
        compiledContentClasses = "",
        compiledInputClasses = "";

    if(divArray.extraContainerClasses){
        containerClassesLength = divArray.extraContainerClasses.length;
    }else{
        containerClassesLength = 0;
    }
    if(divArray.extraLabelClasses){
        labelClassesLength = divArray.extraContainerClasses.length;
    }else{
        labelClassesLength = 0;
    }
    if(divArray.extraContentClasses){
        contentClassesLength = divArray.extraContentClasses.length;
    }else{
        contentClassesLength = 0;
    }
    if(divArray.extraInputClasses){
        inputClassesLength = divArray.extraInputClasses.length;
    }else{
        inputClassesLength = 0;
    }

    // Compile div class arrays into strings
    for(var i=0; i<containerClassesLength; i++){
        compiledContainerClasses += (divArray.extraContainerClasses[i] + " ");
    }
    for(var i=0; i<labelClassesLength; i++){
        compiledLabelClasses += (divArray.extraLabelClasses[i] + " ");
    }
    for(var i=0; i<contentClassesLength; i++){
        compiledContentClasses += (divArray.extraContentClasses[i] + " ");
    }
    for(var i=0; i<inputClassesLength; i++){
        compiledInputClasses += (divArray.extraInputClasses[i] + " ");
    }
    
    // Container
    tempBuild += ("<div id='" + divArray.mainID + "_container' ");
    tempBuild += ("class='content_step_question_container_scheme ");
    tempBuild += (compiledContainerClasses + "'>");
    // Label
    tempBuild += ("<div id='" + divArray.mainID + "_label' ");
    tempBuild += ("class='content_step_question_label_scheme ");
    tempBuild += (compiledLabelClasses + "'>");
    tempBuild += (divArray.labelText + "</div>");
    // Required
    if(divArray.required === true){
        tempBuild += ("<div class='content_required_field'>(*)</div>");
    }
    // Content
    tempBuild += ("<div id='" + divArray.mainID + "_content' ");
    tempBuild += ("class='content_step_question_content_scheme ");
    tempBuild += (compiledContentClasses + "'>");
    // Input
    if(divArray.changeDiv === "textarea"){
        tempBuild += ("<textarea id='" + divArray.mainID + "' ");
        tempBuild += ("class='content_step_question_text_input_scheme ");
        tempBuild += (compiledInputClasses + "' ");
        tempBuild += ("type='" + divArray.inputType + "'></textarea>");
        tempBuild += ("</div><div class='clear'></div></div>");
    }else{
        tempBuild += ("<input id='" + divArray.mainID + "' ");
        tempBuild += ("class='content_step_question_text_input_scheme ");
        tempBuild += (compiledInputClasses + "' ");
        tempBuild += ("type='" + divArray.inputType + "'></input>");
        tempBuild += ("</div><div class='clear'></div></div>");
    }
    // Append to divArray.targetContainer
    $(divArray.targetContainer).append(tempBuild);
};
/***********************************************\
 * Create_HTML                                 *
\***********************************************/
function Create_HTML(){
    // Declare Variables
    var elementProperties = [],
        temp;

    /*******************************************\
     * project_background                      *
    \*******************************************/
    // project_background_assessors
    temp = {
        targetContainer: '#two_part_assessors',
        mainID: 'project_background_assessors',
        labelText: 'Assessor(s) Name:',
        required: true,
        inputType: 'text',
        extraContainerClasses: ['two_part_question_line']
    };
    elementProperties.push(temp);
    // project_background_assessors_date
    temp = {
        targetContainer: '#two_part_assessors',
        mainID: 'project_background_assessors_date',
        labelText: 'Date:',
        required: false,
        inputType: 'text',
        extraContainerClasses: ['two_part_question_line']
    };
    elementProperties.push(temp);
    // project_background_scientific_name
    temp = {
        targetContainer: '#two_part_scientific_name',
        mainID: 'project_background_scientific_name',
        labelText: 'Scientific Name:',
        required: false,
        inputType: 'text',
        extraContainerClasses: ['two_part_question_line']
    };
    elementProperties.push(temp);
    // project_background_common_name
    temp = {
        targetContainer: '#two_part_scientific_name',
        mainID: 'project_background_common_name',
        labelText: 'Common Name:',
        required: false,
        inputType: 'text',
        extraContainerClasses: ['two_part_question_line']
    };
    elementProperties.push(temp);
    // project_background_scale
    temp = {
        targetContainer: '#two_part_scale_prism',
        mainID: 'project_background_scale',
        labelText: 'Scale:',
        required: false,
        inputType: 'text',
        extraContainerClasses: ['two_part_question_line']
    };
    elementProperties.push(temp);
    // project_background_PRISMWMA
    temp = {
        targetContainer: '#two_part_scale_prism',
        mainID: 'project_background_PRISMWMA',
        labelText: 'PRISM/WMA:',
        required: false,
        inputType: 'text',
        extraContainerClasses: ['two_part_question_line']
    };
    elementProperties.push(temp);
    // project_background_conservation_target_impacted
    temp = {
        targetContainer: '#one_part_conservation_target_impacted',
        mainID: 'project_background_conservation_target_impacted',
        labelText: 'Conservation Target Impacted:',
        required: false,
        inputType: 'text'
    };
    elementProperties.push(temp);
    // project_background_project_area_name
    temp = {
        targetContainer: '#two_part_project_area',
        mainID: 'project_background_project_area_name',
        labelText: 'Project Area (site) Name:',
        required: false,
        inputType: 'text',
        extraContainerClasses: ['two_part_question_line']
    };
    elementProperties.push(temp);
    // project_background_project_area_size
    temp = {
        targetContainer: '#two_part_project_area',
        mainID: 'project_background_project_area_size',
        labelText: 'Size:',
        required: false,
        inputType: 'text',
        extraContainerClasses: ['two_part_question_line']
    };
    elementProperties.push(temp);
    // project_background_property_owners
    temp = {
        targetContainer: '#one_part_property_owners',
        mainID: 'project_background_property_owners',
        labelText: 'Property Owner(s):',
        required: false,
        inputType: 'text'
    };
    elementProperties.push(temp);
    // project_background_project_state
    temp = {
        targetContainer: '#two_part_project_location',
        mainID: 'project_background_project_state',
        labelText: 'Project State: (dropdown)',
        required: false,
        inputType: 'text',
        extraContainerClasses: ['two_part_question_line']
    };
    elementProperties.push(temp);
    // project_background_project_county
    temp = {
        targetContainer: '#two_part_project_location',
        mainID: 'project_background_project_county',
        labelText: 'Project County: (dropdown)',
        required: false,
        inputType: 'text',
        extraContainerClasses: ['two_part_question_line']
    };
    elementProperties.push(temp);
    // project_background_project_coord_x
    temp = {
        targetContainer: '#two_part_project_coord',
        mainID: 'project_background_project_coord_x',
        labelText: 'Project Coordinates - X:',
        required: false,
        inputType: 'text',
        extraContainerClasses: ['two_part_question_line']
    };
    elementProperties.push(temp);
    // project_background_project_coord_y
    temp = {
        targetContainer: '#two_part_project_coord',
        mainID: 'project_background_project_coord_y',
        labelText: 'Y:',
        required: false,
        inputType: 'text',
        extraContainerClasses: ['two_part_question_line']
    };
    elementProperties.push(temp);
    // project_background_project_coord_system
    temp = {
        targetContainer: '#one_part_project_coord_system',
        mainID: 'project_background_project_coord_system',
        labelText: 'Coordinate System: (dropdown)',
        required: false,
        inputType: 'text'
    };
    elementProperties.push(temp);
    // project_background_project_goal
    temp = {
        targetContainer: '#one_part_project_goal',
        mainID: 'project_background_project_goal',
        labelText: 'Project Goal:',
        required: true,
        inputType: 'text',
        changeDiv: 'textarea',
        extraContentClasses: ['content_step_question_textarea_content'],
        extraInputClasses: ['content_step_question_textarea_input']
    };
    elementProperties.push(temp);
    // project_background_number_of_years_to_complete
    temp = {
        targetContainer: '#one_part_num_years',
        mainID: 'project_background_number_of_years_to_complete',
        labelText: 'Number of years to complete project:',
        required: false,
        inputType: 'text'
    };
    elementProperties.push(temp);
    // project_background_start_date
    temp = {
        targetContainer: '#two_part_date',
        mainID: 'project_background_start_date',
        labelText: 'Start Date:',
        required: false,
        inputType: 'text',
        extraContainerClasses: ['two_part_question_line']
    };
    elementProperties.push(temp);
    // project_background_end_date
    temp = {
        targetContainer: '#two_part_date',
        mainID: 'project_background_end_date',
        labelText: 'End Date:',
        required: false,
        inputType: 'text',
        extraContainerClasses: ['two_part_question_line']
    };
    elementProperties.push(temp);
    // project_background_ongoing_project
    temp = {
        targetContainer: '#one_part_ongoing',
        mainID: 'project_background_ongoing_project',
        labelText: 'Ongoing Project:',
        required: false,
        inputType: 'text'
    };
    elementProperties.push(temp);
    // project_background_control_required
    temp = {
        targetContainer: '#one_part_control_required',
        mainID: 'project_background_control_required',
        labelText: 'Control Required:',
        required: false,
        inputType: 'text'
    };
    elementProperties.push(temp);
    // project_background_gross_invaded_area
    temp = {
        targetContainer: '#one_part_gross_area',
        mainID: 'project_background_gross_invaded_area',
        labelText: 'Gross Invaded Area:',
        required: true,
        inputType: 'text'
    };
    elementProperties.push(temp);
    // project_background_net_invaded_area
    temp = {
        targetContainer: '#one_part_net_area',
        mainID: 'project_background_net_invaded_area',
        labelText: 'Net Invaded Area:',
        required: false,
        inputType: 'text'
    };
    elementProperties.push(temp);
    // project_background_number_of_occurances
    temp = {
        targetContainer: '#one_part_num_occurances',
        mainID: 'project_background_number_of_occurances',
        labelText: 'Number Of Occurances:',
        required: false,
        inputType: 'text'
    };
    elementProperties.push(temp);
    // project_background_imap_share_results
    temp = {
        targetContainer: '#one_part_imap_share',
        mainID: 'project_background_imap_share_results',
        labelText: 'Do you want to share your results on iMapInvasives?:',
        required: true,
        inputType: 'text'
    };
    elementProperties.push(temp);
    // project_background_imap_account
    temp = {
        targetContainer: '#one_part_imap_account',
        mainID: 'project_background_imap_account',
        labelText: 'iMapInvasives Account:',
        required: false,
        inputType: 'text'
    };
    elementProperties.push(temp);
    /*******************************************\
     * strategy_selection                      *
    \*******************************************/
    // strategy_selection_NYS_score
    temp = {
        targetContainer: '#one_part_NYS_score',
        mainID: 'strategy_selection_NYS_score',
        labelText: 'Total NYS Ecological Impact Score (Max 40):',
        required: true,
        inputType: 'text'
    };
    elementProperties.push(temp);
    // strategy_selection_checkbox_answer
    temp = {
        targetContainer: '#one_part_ecological_impact',
        mainID: 'strategy_selection_ecological_impact',
        labelText: 'Significant ecological impact:',
        required: false,
        inputType: 'checkbox'
    };
    elementProperties.push(temp);
    temp = {
        targetContainer: '#one_part_limited_distribution',
        mainID: 'strategy_selection_limited_distribution',
        labelText: 'Ecological impact uncertain, limited state wide distribution:',
        required: false,
        inputType: 'checkbox'
    };
    elementProperties.push(temp);
    temp = {
        targetContainer: '#one_part_widespread_distribution',
        mainID: 'strategy_selection_widespread_distribution',
        labelText: 'Ecological impact uncertain, widespread state wide distribution:',
        required: false,
        inputType: 'checkbox'
    };
    elementProperties.push(temp);
    temp = {
        targetContainer: '#one_part_negligible_impact',
        mainID: 'strategy_selection_negligible_impact',
        labelText: 'Negligible impact or harm:',
        required: false,
        inputType: 'checkbox'
    };
    elementProperties.push(temp);
    temp = {
        targetContainer: '#one_part_significant_harm',
        mainID: 'strategy_selection_significant_harm',
        labelText: 'Significant harm to human health, economy, or other values:',
        required: false,
        inputType: 'checkbox'
    };
    elementProperties.push(temp);
    // strategy_selection_documentation
    temp = {
        targetContainer: '#one_part_documentation',
        mainID: 'strategy_selection_NYS_score',
        labelText: 'Documentation:',
        required: false,
        inputType: 'text',
        changeDiv: 'textarea',
        extraContentClasses: ['content_step_question_textarea_content'],
        extraInputClasses: ['content_step_question_textarea_input']
    };
    elementProperties.push(temp);
    /*
    // strategy_selection_abundance_checkbox
    temp = {
        targetContainer: '#one_part_ecological_impact',
        mainID: 'strategy_selection_ecological_impact',
        labelText: 'Significant ecological impact:',
        required: false,
        inputType: 'checkbox'
    };
    elementProperties.push(temp);
    */

    // Create Elements
    var propertiesLength = elementProperties.length;
    for(var i=0; i<propertiesLength; i++){
        Create_Div(elementProperties[i]);
    }
    IPMDAT_Init();
};
