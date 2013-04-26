/******************************************************************************\
 * IPMDAT_custom.js                                                           *
 * -------------------------------------------------------------------------- *
 * This file contains the custom code for the IPMDAT project.                 *
\******************************************************************************/

/***********************************************\
 * Save_Cookie                                 *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * stepNumber (current step number on save)    *
 * completedSteps (array of completed step #'s *
\***********************************************/
function Save_Cookie(cookieData, stepNumber, completedSteps){
    var name = $('#cookie_name').val(),
        savedData = $.JSONCookie(name),
        cookieArray = {
            // TODO: UPDATE HERE
            // PROJECT BACKGROUND (STEP 1)
            projectBackgroundAssessors: null,
            projectBackgroundAssessorsDate: null,
            projectBackgroundScientificName: null,
            projectBackgroundCommonName: null,
            projectBackgroundScale: null,
            projectBackgroundPRISMWMA: null,
            projectBackgroundConservationTargetImpacted: null,
            projectBackgroundProjectAreaName: null,
            projectBackgroundProjectAreaSize: null,
            projectBackgroundPropertyOwners: null,
            projectBackgroundProjectState: null,
            projectBackgroundProjectCounty: null,
            projectBackgroundProjectCoordX: null,
            projectBackgroundProjectCoordY: null,
            projectBackgroundProjectCoordSystem: null,
            projectBackgroundProjectGoal: null,
            projectBackgroundNumberOfYearsToComplete: null,
            projectBackgroundStartDate: null,
            projectBackgroundEndDate: null,
            projectBackgroundOngoingProject: null,
            projectBackgroundControlRequired: null,
            projectBackgroundGrossInvadedArea: null,
            projectBackgroundNetInvadedArea: null,
            projectBackgroundNumberOfOccurances: null,
            projectBackgroundImapShareResults: null,
            projectBackgroundImapAccount: null,
            // STRATEGY SELECTION (STEP 2)
            strategySelectionNYSScore: null,
            strategySelectionCheckbox: null,
            strategySelectionDocumentation: null,
            strategySelectionAbundanceAndDistributionCheckbox: null,
            strategySelectionAbundanceAndDistributionDocumentation: null
            // ERADICATION (STEP 3)
            // CONTAINMENT (STEP 4)
            // SUPPRESSION (STEP 5)
            // RECOMMENDATION SUMMARY (STEP 6)
        };

    for(var i=0; i<completedSteps.length; i++){
        if(completedSteps[i] === "1.1"){
            if(stepNumber === "1.1"){
                // Entering NEW data from cookieData
                cookieArray.projectBackgroundAssessors = cookieData.projectBackgroundAssessors;
                cookieArray.projectBackgroundAssessorsDate = cookieData.projectBackgroundAssessorsDate;
                cookieArray.projectBackgroundScientificName = cookieData.projectBackgroundScientificName;
                cookieArray.projectBackgroundCommonName = cookieData.projectBackgroundCommonName;
                cookieArray.projectBackgroundScale = cookieData.projectBackgroundScale;
                cookieArray.projectBackgroundPRISMWMA = cookieData.projectBackgroundPRISMWMA;
                cookieArray.projectBackgroundConservationTargetImpacted = cookieData.projectBackgroundConservationTargetImpacted;
                cookieArray.projectBackgroundProjectAreaName = cookieData.projectBackgroundProjectAreaName;
                cookieArray.projectBackgroundProjectAreaSize = cookieData.projectBackgroundProjectAreaSize;
                cookieArray.projectBackgroundPropertyOwners = cookieData.projectBackgroundPropertyOwners;
                cookieArray.projectBackgroundProjectState = cookieData.projectBackgroundProjectState;
                cookieArray.projectBackgroundProjectCounty = cookieData.projectBackgroundProjectCounty;
                cookieArray.projectBackgroundProjectCoordX = cookieData.projectBackgroundProjectCoordX;
                cookieArray.projectBackgroundProjectCoordY = cookieData.projectBackgroundProjectCoordY;
                cookieArray.projectBackgroundProjectCoordSystem = cookieData.projectBackgroundProjectCoordSystem;
                cookieArray.projectBackgroundProjectGoal = cookieData.projectBackgroundProjectGoal;
            }else{
                // Recall OLD data from savedData
                cookieArray.projectBackgroundAssessors = savedData.projectBackgroundAssessors;
                cookieArray.projectBackgroundAssessorsDate = savedData.projectBackgroundAssessorsDate;
                cookieArray.projectBackgroundScientificName = savedData.projectBackgroundScientificName;
                cookieArray.projectBackgroundCommonName = savedData.projectBackgroundCommonName;
                cookieArray.projectBackgroundScale = savedData.projectBackgroundScale;
                cookieArray.projectBackgroundPRISMWMA = savedData.projectBackgroundPRISMWMA;
                cookieArray.projectBackgroundConservationTargetImpacted = savedData.projectBackgroundConservationTargetImpacted;
                cookieArray.projectBackgroundProjectAreaName = savedData.projectBackgroundProjectAreaName;
                cookieArray.projectBackgroundProjectAreaSize = savedData.projectBackgroundProjectAreaSize;
                cookieArray.projectBackgroundPropertyOwners = savedData.projectBackgroundPropertyOwners;
                cookieArray.projectBackgroundProjectState = savedData.projectBackgroundProjectState;
                cookieArray.projectBackgroundProjectCounty = savedData.projectBackgroundProjectCounty;
                cookieArray.projectBackgroundProjectCoordX = savedData.projectBackgroundProjectCoordX;
                cookieArray.projectBackgroundProjectCoordY = savedData.projectBackgroundProjectCoordY;
                cookieArray.projectBackgroundProjectCoordSystem = savedData.projectBackgroundProjectCoordSystem;
                cookieArray.projectBackgroundProjectGoal = savedData.projectBackgroundProjectGoal;
            }
        }else if(completedSteps[i] === "1.2"){
            if(stepNumber === "1.2"){
                // Entering NEW data from cookieData
                cookieArray.projectBackgroundNumberOfYearsToComplete = cookieData.projectBackgroundNumberOfYearsToComplete;
                cookieArray.projectBackgroundStartDate = cookieData.projectBackgroundStartDate;
                cookieArray.projectBackgroundEndDate = cookieData.projectBackgroundEndDate;
                cookieArray.projectBackgroundOngoingProject = cookieData.projectBackgroundOngoingProject;
                cookieArray.projectBackgroundControlRequired = cookieData.projectBackgroundControlRequired;
            }else{
                // Recall OLD data from savedData
                cookieArray.projectBackgroundNumberOfYearsToComplete = savedData.projectBackgroundNumberOfYearsToComplete;
                cookieArray.projectBackgroundStartDate = savedData.projectBackgroundStartDate;
                cookieArray.projectBackgroundEndDate = savedData.projectBackgroundEndDate;
                cookieArray.projectBackgroundOngoingProject = savedData.projectBackgroundOngoingProject;
                cookieArray.projectBackgroundControlRequired = savedData.projectBackgroundControlRequired;
            }
        }else if(completedSteps[i] === "1.3"){
            if(stepNumber === "1.3"){
                // Entering NEW data from cookieData
                cookieArray.projectBackgroundGrossInvadedArea = cookieData.projectBackgroundGrossInvadedArea;
                cookieArray.projectBackgroundNetInvadedArea = cookieData.projectBackgroundNetInvadedArea;
                cookieArray.projectBackgroundNumberOfOccurances = cookieData.projectBackgroundNumberOfOccurances;
            }else{
                // Recall OLD data from savedData
                cookieArray.projectBackgroundGrossInvadedArea = savedData.projectBackgroundGrossInvadedArea;
                cookieArray.projectBackgroundNetInvadedArea = savedData.projectBackgroundNetInvadedArea;
                cookieArray.projectBackgroundNumberOfOccurances = savedData.projectBackgroundNumberOfOccurances;
            }
        }else if(completedSteps[i] === "1.4"){
            if(stepNumber === "1.4"){
                // Entering NEW data from cookieData
                cookieArray.projectBackgroundImapShareResults = cookieData.projectBackgroundImapShareResults;
                cookieArray.projectBackgroundImapAccount = cookieData.projectBackgroundImapAccount;
            }else{
                // Recall OLD data from savedData
                cookieArray.projectBackgroundImapShareResults = savedData.projectBackgroundImapShareResults;
                cookieArray.projectBackgroundImapAccount = savedData.projectBackgroundImapAccount;
            }
        }else if(completedSteps[i] === "2.1"){
            if(stepNumber === "2.1"){
                // Entering NEW data from cookieData
                cookieArray.strategySelectionNYSScore = cookieData.strategySelectionNYSScore;
                cookieArray.strategySelectionCheckbox = cookieData.strategySelectionCheckbox;
                cookieArray.strategySelectionDocumentation = cookieData.strategySelectionDocumentation;
            }else{
                // Recall OLD data from savedData
                cookieArray.strategySelectionNYSScore = savedData.strategySelectionNYSScore;
                cookieArray.strategySelectionCheckbox = savedData.strategySelectionCheckbox;
                cookieArray.strategySelectionDocumentation = savedData.strategySelectionDocumentation;
            }
        }else if(completedSteps[i] === "2.2"){
            if(stepNumber === "2.2"){
                // Entering NEW data from cookieData
                cookieArray.strategySelectionAbundanceAndDistributionCheckbox = cookieData.strategySelectionAbundanceAndDistributionCheckbox;
                cookieArray.strategySelectionAbundanceAndDistributionDocumentation = cookieData.strategySelectionAbundanceAndDistributionDocumentation;
            }else{
                // Recall OLD data from savedData
                cookieArray.strategySelectionAbundanceAndDistributionCheckbox = savedData.strategySelectionAbundanceAndDistributionCheckbox;
                cookieArray.strategySelectionAbundanceAndDistributionDocumentation = savedData.strategySelectionAbundanceAndDistributionDocumentation;
            }
        }else if(completedSteps[i] === "2.3"){
            if(stepNumber === "2.3"){
                // Entering NEW data from cookieData
                // cookieArray.strategySelection = cookieData.strategySelection;
            }else{
                // Recall OLD data from savedData
                // cookieArray.strategySelection = savedData.strategySelection;
            }
        }else if(completedSteps[i] === "2.4"){
            if(stepNumber === "2.4"){
                // Entering NEW data from cookieData
                // cookieArray.strategySelection = cookieData.strategySelection;
            }else{
                // Recall OLD data from savedData
                // cookieArray.strategySelection = savedData.strategySelection;
            }
        }
        }else if(completedSteps[i] === "3"){
            // TODO: UPDATE HERE
            if(stepNumber === "eradication"){
                // Entering New data from cookieData
            }else{
                // Recall OLD data from savedData
            }
        }else if(completedSteps[i] === "4"){
            // TODO: UPDATE HERE
            if(stepNumber === "containment"){
                // Entering New data from cookieData
            }else{
                // Recall OLD data from savedData
            }
        }else if(completedSteps[i] === "5"){
            // TODO: UPDATE HERE
            if(stepNumber === "suppression"){
                // Entering New data from cookieData
            }else{
                // Recall OLD data from savedData
            }
        }else if(completedSteps[i] === "6"){
            // TODO: UPDATE HERE
            if(stepNumber === "recommendationSummary"){
                // Entering New data from cookieData
            }else{
                // Recall OLD data from savedData
            }
        }
    }
    $.JSONCookie(name, cookieArray, {path: '/'});
};
/***********************************************\
 * Check_Available_Steps                       *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function Check_Available_Steps(cookieData, completedSteps, currentStep){
    // Refresh With Current Data
    var name = $('#cookie_name').val(),
        cookieData = $.JSONCookie(name);

    // Clear Forward/Back Nav Bars
    if($('#content_nav_forward').hasClass('content_nav_base_active')){
        $('#content_nav_forward').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
    }
    if($('#content_nav_back').hasClass('content_nav_base_active')){
        $('#content_nav_back').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
    }

    // Unbind Recurring Buttons
    $('#content_nav_forward').unbind('click');
    $('#content_nav_back').unbind('click');
    $('#content_progress_bar_project_background').unbind('click');
    $('#content_step_project_background_substep_one').unbind('click');
    $('#content_step_project_background_substep_two').unbind('click');
    $('#content_step_project_background_substep_three').unbind('click');
    $('#content_step_project_background_substep_four').unbind('click');
    // TODO: UPDATE HERE
    $('#content_progress_bar_strategy_selection').unbind('click');
    $('#content_step_strategy_selection_substep_one').unbind('click');
    $('#content_step_strategy_selection_substep_two').unbind('click');
    $('#content_step_strategy_selection_substep_three').unbind('click');
    $('#content_step_strategy_selection_substep_four').unbind('click');
    // TODO: UPDATE HERE
    $('#content_progress_bar_eradication').unbind('click');
    // TODO: UPDATE HERE
    $('#content_progress_bar_containment').unbind('click');
    // TODO: UPDATE HERE
    $('#content_progress_bar_suppression').unbind('click');
    // TODO: UPDATE HERE
    $('#content_progress_bar_recommendation_summary').unbind('click');
    
    // Make All Steps Unavailable By Default

    // Control Step Progress
    // PROJECT BACKGROUND (STEP 1) - Always available
    if($('#content_progress_bar_project_background').hasClass('progress_bar_active')){
        $('#content_progress_bar_project_background').removeClass('progress_bar_active');
    }
    if($('#content_progress_bar_project_background').hasClass('progress_bar_inactive')){
        $('#content_progress_bar_project_background').removeClass('progress_bar_inactive');
    }
    if($('#content_progress_bar_project_background').hasClass('progress_bar_available')){
    }else{
        $('#content_progress_bar_project_background').addClass('progress_bar_available');
    }
    if($('#content_step_project_background_substep_one').hasClass('content_substep_active')){
        $('#content_step_project_background_substep_one').removeClass('content_substep_active');
    }
    if($('#content_step_project_background_substep_one').hasClass('content_substep_inactive')){
        $('#content_step_project_background_substep_one').removeClass('content_substep_inactive');
    }
    if($('#content_step_project_background_substep_one').hasClass('content_substep_available')){
    }else{
        $('#content_step_project_background_substep_one').addClass('content_substep_available');
    }
    for(var i=0; i<completedSteps.length; i++){
        if(completedSteps[i] === "1.1"){
            if($('#content_step_project_background_substep_two').hasClass('content_substep_active')){
                $('#content_step_project_background_substep_two').removeClass('content_substep_active');
            }
            if($('#content_step_project_background_substep_two').hasClass('content_substep_inactive')){
                $('#content_step_project_background_substep_two').removeClass('content_substep_inactive');
            }
            if($('#content_step_project_background_substep_two').hasClass('content_substep_available')){
            }else{
                $('#content_step_project_background_substep_two').addClass('content_substep_available');
            }
        }
        if(completedSteps[i] === "1.2"){
            if($('#content_step_project_background_substep_three').hasClass('content_substep_active')){
                $('#content_step_project_background_substep_three').removeClass('content_substep_active');
            }
            if($('#content_step_project_background_substep_three').hasClass('content_substep_inactive')){
                $('#content_step_project_background_substep_three').removeClass('content_substep_inactive');
            }
            if($('#content_step_project_background_substep_three').hasClass('content_substep_available')){
            }else{
                $('#content_step_project_background_substep_three').addClass('content_substep_available');
            }
        }
        if(completedSteps[i] === "1.3"){
            if($('#content_step_project_background_substep_four').hasClass('content_substep_active')){
                $('#content_step_project_background_substep_four').removeClass('content_substep_active');
            }
            if($('#content_step_project_background_substep_four').hasClass('content_substep_inactive')){
                $('#content_step_project_background_substep_four').removeClass('content_substep_inactive');
            }
            if($('#content_step_project_background_substep_four').hasClass('content_substep_available')){
            }else{
                $('#content_step_project_background_substep_four').addClass('content_substep_available');
            }
        }
        if(completedSteps[i] === "1.4"){
            if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_active')){
                $('#content_progress_bar_strategy_selection').removeClass('progress_bar_active');
            }
            if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_inactive')){
                $('#content_progress_bar_strategy_selection').removeClass('progress_bar_inactive');
            }
            if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_available')){
            }else{
                $('#content_progress_bar_strategy_selection').addClass('progress_bar_available');
            }
            if($('#content_step_strategy_selection_substep_one').hasClass('content_substep_active')){
                $('#content_step_strategy_selection_substep_one').removeClass('content_substep_active');
                console.log('Removing');
            }
            if($('#content_step_strategy_selection_substep_one').hasClass('content_substep_inactive')){
                $('#content_step_strategy_selection_substep_one').removeClass('content_substep_inactive');
            }
            if($('#content_step_strategy_selection_substep_one').hasClass('content_substep_available')){
            }else{
                $('#content_step_strategy_selection_substep_one').addClass('content_substep_available');
            }
        }
        if(completedSteps[i] === "2.1"){
            if($('#content_step_strategy_selection_substep_two').hasClass('content_substep_active')){
                $('#content_step_strategy_selection_substep_two').removeClass('content_substep_active');
            }
            if($('#content_step_strategy_selection_substep_two').hasClass('content_substep_inactive')){
                $('#content_step_strategy_selection_substep_two').removeClass('content_substep_inactive');
            }
            if($('#content_step_strategy_selection_substep_two').hasClass('content_substep_available')){
            }else{
                $('#content_step_strategy_selection_substep_two').addClass('content_substep_available');
            }
        }
        if(completedSteps[i] === "2.2"){
            if($('#content_step_strategy_selection_substep_three').hasClass('content_substep_active')){
                $('#content_step_strategy_selection_substep_three').removeClass('content_substep_active');
            }
            if($('#content_step_strategy_selection_substep_three').hasClass('content_substep_inactive')){
                $('#content_step_strategy_selection_substep_three').removeClass('content_substep_inactive');
            }
            if($('#content_step_strategy_selection_substep_three').hasClass('content_substep_available')){
            }else{
                $('#content_step_strategy_selection_substep_three').addClass('content_substep_available');
            }
        }
        if(completedSteps[i] === "3"){
            // TODO: UPDATE HERE
            // CONTAINMENT (STEP 4)
            if($('#content_progress_bar_containment').hasClass('progress_bar_active')){
                $('#content_progress_bar_containment').removeClass('progress_bar_active');
            }
            if($('#content_progress_bar_containment').hasClass('progress_bar_inactive')){
                $('#content_progress_bar_containment').removeClass('progress_bar_inactive');
            }
            if($('#content_progress_bar_containment').hasClass('progress_bar_available')){
            }else{
                $('#content_progress_bar_containment').addClass('progress_bar_available');
            }
        }
        if(completedSteps[i] === "4"){
            // TODO: UPDATE HERE
            // SUPPRESSION (STEP 5)
            if($('#content_progress_bar_suppression').hasClass('progress_bar_active')){
                $('#content_progress_bar_suppression').removeClass('progress_bar_active');
            }
            if($('#content_progress_bar_suppression').hasClass('progress_bar_inactive')){
                $('#content_progress_bar_suppression').removeClass('progress_bar_inactive');
            }
            if($('#content_progress_bar_suppression').hasClass('progress_bar_available')){
            }else{
                $('#content_progress_bar_suppression').addClass('progress_bar_available');
            }
        }
        if(completedSteps[i] === "5"){
            // TODO: UPDATE HERE
            // RECOMMENDATION SUMMARY (STEP 6)
            if($('#content_progress_bar_recommendation_summary').hasClass('progress_bar_active')){
                $('#content_progress_bar_recommendation_summary').removeClass('progress_bar_active');
            }
            if($('#content_progress_bar_recommendation_summary').hasClass('progress_bar_inactive')){
                $('#content_progress_bar_recommendation_summary').removeClass('progress_bar_inactive');
            }
            if($('#content_progress_bar_recommendation_summary').hasClass('progress_bar_available')){
            }else{
                $('#content_progress_bar_recommendation_summary').addClass('progress_bar_available');
            }
        }
    }

    // Clear All Step Containers
    if($('#content_step_project_background_container').hasClass('content_step_active')){
        $('#content_step_project_background_container').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_selection_container').hasClass('content_step_active')){
        $('#content_step_strategy_selection_container').removeClass('content_step_active').addClass('content_step_inactive');
    }
    // TODO: UPDATE HERE

    // Fire Correct Step
    // Also - we need to clear the fields in preparation for input of fields.
    // This needs to be done even if the step is completed. The user could have
    //      backed a step (only partially completed). The fields that are
    //      completed will be automatically filled on step function fired.
    if((currentStep === "1.1")||(currentStep === "1.2")||(currentStep === "1.3")||(currentStep === "1.4")){
        // Main Progress Bars
        if($('#content_progress_bar_project_background').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_project_background').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_project_background').hasClass('progress_bar_available')){
            $('#content_progress_bar_project_background').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_project_background').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_project_background').addClass('progress_bar_active');
        }
        
        // SubStep Progress Bars & Clear Questions
        if(currentStep === "1.1"){
            // SubStep Progress Bar
            if($('#content_step_project_background_substep_one').hasClass('content_substep_inactive')){
                $('#content_step_project_background_substep_one').removeClass('content_substep_inactive');
            }
            if($('#content_step_project_background_substep_one').hasClass('content_substep_available')){
                $('#content_step_project_background_substep_one').removeClass('content_substep_available');
            }
            if($('#content_step_project_background_substep_one').hasClass('content_substep_active')){
            }else{
                $('#content_step_project_background_substep_one').addClass('content_substep_active');
            }
            // Clear Questions
            $('#project_background_assessors').prop('value', "");
            $('#project_background_assessors_date').prop('value', "");
            $('#project_background_scientific_name').prop('value', "");
            $('#project_background_common_name').prop('value', "");
            $('#project_background_scale').prop('value', "");
            $('#project_background_PRISMWMA').prop('value', "");
            $('#project_background_conservation_target_impacted').prop('value', "");
            $('#project_background_project_area_name').prop('value', "");
            $('#project_background_project_area_size').prop('value', "");
            $('#project_background_property_owners').prop('value', "");
            $('#project_background_project_state').prop('value', "");
            $('#project_background_project_county').prop('value', "");
            $('#project_background_project_coord_x').prop('value', "");
            $('#project_background_project_coord_y').prop('value', "");
            $('#project_background_project_coord_system').prop('value', "");
            $('#project_background_project_goal').prop('value', "");
        }else if(currentStep === "1.2"){
            // SubStep Progress Bar
            if($('#content_step_project_background_substep_two').hasClass('content_substep_inactive')){
                $('#content_step_project_background_substep_two').removeClass('content_substep_inactive');
            }
            if($('#content_step_project_background_substep_two').hasClass('content_substep_available')){
                $('#content_step_project_background_substep_two').removeClass('content_substep_available');
            }
            if($('#content_step_project_background_substep_two').hasClass('content_substep_active')){
            }else{
                $('#content_step_project_background_substep_two').addClass('content_substep_active');
            }
            // Clear Questions
            $('#project_background_number_of_years_to_complete').prop('value', "");
            $('#project_background_start_date').prop('value', "");
            $('#project_background_end_date').prop('value', "");
            $('#project_background_ongoing_project').prop('value', "");
            $('#project_background_control_required').prop('value', "");
        }else if(currentStep === "1.3"){
            // SubStep Progress Bar
            if($('#content_step_project_background_substep_three').hasClass('content_substep_inactive')){
                $('#content_step_project_background_substep_three').removeClass('content_substep_inactive');
            }
            if($('#content_step_project_background_substep_three').hasClass('content_substep_available')){
                $('#content_step_project_background_substep_three').removeClass('content_substep_available');
            }
            if($('#content_step_project_background_substep_three').hasClass('content_substep_active')){
            }else{
                $('#content_step_project_background_substep_three').addClass('content_substep_active');
            }
            // Clear Questions
            $('#project_background_gross_invaded_area').prop('value', "");
            $('#project_background_net_invaded_area').prop('value', "");
            $('#project_background_number_of_occurances').prop('value', "");
        }else if(currentStep === "1.4"){
            // SubStep Progress Bar
            if($('#content_step_project_background_substep_four').hasClass('content_substep_inactive')){
                $('#content_step_project_background_substep_four').removeClass('content_substep_inactive');
            }
            if($('#content_step_project_background_substep_four').hasClass('content_substep_available')){
                $('#content_step_project_background_substep_four').removeClass('content_substep_available');
            }
            if($('#content_step_project_background_substep_four').hasClass('content_substep_active')){
            }else{
                $('#content_step_project_background_substep_four').addClass('content_substep_active');
            }
            // Clear Questions
            $('#project_background_imap_share_results').prop('value', "");
            $('#project_background_imap_account').prop('value', "");
        }
        
        // Execute Step Function
        JSON_Cookie_Step_Project_Background(cookieData, completedSteps, currentStep);
    }else if((currentStep === "2.1")||(currentStep === "2.2")||(currentStep === "2.3")||(currentStep === "2.4")){
        // Main Progress Bars
        if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_strategy_selection').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_available')){
            $('#content_progress_bar_strategy_selection').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_strategy_selection').addClass('progress_bar_active');
        }
        
        // SubStep Progress Bars & Clear Questions
        if(currentStep === "2.1"){
            // SubStep Progress Bar
            if($('#content_step_strategy_selection_substep_one').hasClass('content_substep_inactive')){
                $('#content_step_strategy_selection_substep_one').removeClass('content_substep_inactive');
            }
            if($('#content_step_strategy_selection_substep_one').hasClass('content_substep_available')){
                $('#content_step_strategy_selection_substep_one').removeClass('content_substep_available');
            }
            if($('#content_step_strategy_selection_substep_one').hasClass('content_substep_active')){
            }else{
                $('#content_step_strategy_selection_substep_one').addClass('content_substep_active');
            }
            // Clear Questions
            $('#strategy_selection_NYS_score').prop('value', "");
            $('#strategy_selection_ecological_impact').prop('checked', false);
            $('#strategy_selection_limited_distribution').prop('checked', false);
            $('#strategy_selection_widespread_distribution').prop('checked', false);
            $('#strategy_selection_negligible_impact').prop('checked', false);
            $('#strategy_selection_significant_harm').prop('checked', false);
            $('#strategy_selection_documentation').prop('value', "");
        }else if(currentStep === "2.2"){
            // SubStep Progress Bar
            if($('#content_step_strategy_selection_substep_two').hasClass('content_substep_inactive')){
                $('#content_step_strategy_selection_substep_two').removeClass('content_substep_inactive');
            }
            if($('#content_step_strategy_selection_substep_two').hasClass('content_substep_available')){
                $('#content_step_strategy_selection_substep_two').removeClass('content_substep_available');
            }
            if($('#content_step_strategy_selection_substep_two').hasClass('content_substep_active')){
            }else{
                $('#content_step_strategy_selection_substep_two').addClass('content_substep_active');
            }
            // Clear Questions
            $('#strategy_selection_eradication_state_scale').prop('checked', false);
            $('#strategy_selection_containment_state_scale').prop('checked', false);
            $('#strategy_selection_eradication_project_scale').prop('checked', false);
            $('#strategy_selection_containment_project_scale').prop('checked', false);
            $('#strategy_selection_suppression').prop('checked', false);
            $('#strategy_selection_abundance_and_distribution_documentation').prop('value', "");
        }else if(currentStep === "2.3"){
            // SubStep Progress Bar
            // Clear Questions
            // TODO: UPDATE HERE
        }else if(currentStep === "2.4"){
            // SubStep Progress Bar
            // Clear Questions
            // TODO: UPDATE HERE
        }
        // Execute Step Function
        JSON_Cookie_Step_Strategy_Selection(cookieData, completedSteps, currentStep);
    } else if(currentStep === "eradication"){
        // Clear Questions
        // TODO: UPDATE HERE
        // Progress Bars
        if($('#content_progress_bar_eradication').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_eradication').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_eradication').hasClass('progress_bar_available')){
            $('#content_progress_bar_eradication').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_eradication').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_eradication').addClass('progress_bar_active');
        }
        JSON_Cookie_Step_Eradication(cookieData, completedSteps, currentStep);
    } else if(currentStep === "containment"){
        // Clear Questions
        // TODO: UPDATE HERE
        // Progress Bars
        if($('#content_progress_bar_containment').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_containment').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_containment').hasClass('progress_bar_available')){
            $('#content_progress_bar_containment').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_containment').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_containment').addClass('progress_bar_active');
        }
        JSON_Cookie_Step_Containment(cookieData, completedSteps, currentStep);
    } else if(currentStep === "suppression"){
        // Clear Questions
        // TODO: UPDATE HERE
        // Progress Bars
        if($('#content_progress_bar_suppression').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_suppression').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_suppression').hasClass('progress_bar_available')){
            $('#content_progress_bar_suppression').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_suppression').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_suppression').addClass('progress_bar_active');
        }
        JSON_Cookie_Step_Suppression(cookieData, completedSteps, currentStep);
    } else if(currentStep === "recommendationSummary"){
        // Clear Questions
        // TODO: UPDATE HERE
        // Progress Bars
        if($('#content_progress_bar_recommendation_summary').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_recommendation_summary').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_recommendation_summary').hasClass('progress_bar_available')){
            $('#content_progress_bar_recommendation_summary').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_recommendation_summary').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_recommendation_summary').addClass('progress_bar_active');
        }
        JSON_Cookie_Step_Recommendation_Summary(cookieData, completedSteps, currentStep);
    }
};

/***********************************************\
 * IPMDAT_Init()                               *
 * ------------------------------------------- *
 * Initial function being fired on page        *
\***********************************************/
function IPMDAT_Init(){
    // Declare Variables
    // TODO: UPDATE HERE
    var cookieData = {
            // PROJECT BACKGROUND (STEP 1)
            projectBackgroundAssessors: null,
            projectBackgroundAssessorsDate: null,
            projectBackgroundScientificName: null,
            projectBackgroundCommonName: null,
            projectBackgroundScale: null,
            projectBackgroundPRISMWMA: null,
            projectBackgroundConservationTargetImpacted: null,
            projectBackgroundProjectAreaName: null,
            projectBackgroundProjectAreaSize: null,
            projectBackgroundPropertyOwners: null,
            projectBackgroundProjectState: null,
            projectBackgroundProjectCounty: null,
            projectBackgroundProjectCoordX: null,
            projectBackgroundProjectCoordY: null,
            projectBackgroundProjectCoordSystem: null,
            projectBackgroundProjectGoal: null,
            projectBackgroundNumberOfYearsToComplete: null,
            projectBackgroundStartDate: null,
            projectBackgroundEndDate: null,
            projectBackgroundOngoingProject: null,
            projectBackgroundControlRequired: null,
            projectBackgroundGrossInvadedArea: null,
            projectBackgroundNetInvadedArea: null,
            projectBackgroundNumberOfOccurances: null,
            projectBackgroundImapShareResults: null,
            projectBackgroundImapAccount: null,
            // STRATEGY SELECTION (STEP 2)
            strategySelectionNYSScore: null,
            strategySelectionCheckbox: null,
            strategySelectionDocumentation: null,
            strategySelectionAbundanceAndDistributionCheckbox: null,
            strategySelectionAbundanceAndDistributionDocumentation: null
            // ERADICATION (STEP 3)
            // CONTAINMENT (STEP 4)
            // SUPPRESSION (STEP 5)
            // RECOMMENDATION SUMMARY (STEP 6)
        },
        completedSteps = [],
        currentStep = "1.1",
        name = $('#cookie_name').val(),
        savedData = $.JSONCookie(name);

    // Assign Functionality to console.log
    $('#console_log').click(function(){
        console.log($.JSONCookie(name));
    });

    // Assign Functionality to Clear Cookie
    // TODO: UPDATE HERE
    $('#clear_cookie').click(function(){
        cookieData = {
            // PROJECT BACKGROUND (STEP 1)
            projectBackgroundAssessors: null,
            projectBackgroundAssessorsDate: null,
            projectBackgroundScientificName: null,
            projectBackgroundCommonName: null,
            projectBackgroundScale: null,
            projectBackgroundPRISMWMA: null,
            projectBackgroundConservationTargetImpacted: null,
            projectBackgroundProjectAreaName: null,
            projectBackgroundProjectAreaSize: null,
            projectBackgroundPropertyOwners: null,
            projectBackgroundProjectState: null,
            projectBackgroundProjectCounty: null,
            projectBackgroundProjectCoordX: null,
            projectBackgroundProjectCoordY: null,
            projectBackgroundProjectCoordSystem: null,
            projectBackgroundProjectGoal: null,
            projectBackgroundNumberOfYearsToComplete: null,
            projectBackgroundStartDate: null,
            projectBackgroundEndDate: null,
            projectBackgroundOngoingProject: null,
            projectBackgroundControlRequired: null,
            projectBackgroundGrossInvadedArea: null,
            projectBackgroundNetInvadedArea: null,
            projectBackgroundNumberOfOccurances: null,
            projectBackgroundImapShareResults: null,
            projectBackgroundImapAccount: null,
            // STRATEGY SELECTION (STEP 2)
            strategySelectionNYSScore: null,
            strategySelectionCheckbox: null,
            strategySelectionDocumentation: null,
            strategySelectionAbundanceAndDistributionCheckbox: null,
            strategySelectionAbundanceAndDistributionDocumentation: null
            // ERADICATION (STEP 3)
            // CONTAINMENT (STEP 4)
            // SUPPRESSION (STEP 5)
            // RECOMMENDATION SUMMARY (STEP 6)
        };
        $.JSONCookie(name, cookieData, {path: '/'});
    });
    
    // Check For Previous Data
    // TODO: UPDATE HERE
    var savedData = $.JSONCookie(name),
        stepFail = false;
    
    //------------------------------------------------------------------------\\
    // Project Background                                                     \\
    //------------------------------------------------------------------------\\
    //projectBackgroundAssessors
    if(savedData.projectBackgroundAssessors !== null){
        cookieData.projectBackgroundAssessors = savedData.projectBackgroundAssessors;
    }else{ stepFail = true; }

    // 1.1
    if(stepFail === false){
        completedSteps.push("1.1");
    }
    stepFail = false;

    //projectBackgroundNumberOfYearsToComplete
    if(savedData.projectBackgroundNumberOfYearsToComplete !== null){
        cookieData.projectBackgroundNumberOfYearsToComplete = savedData.projectBackgroundNumberOfYearsToComplete;
    }else{ stepFail = true; }


    // 1.2
    if(stepFail === false){
        completedSteps.push("1.2");
    }
    stepFail = false;

    //projectBackgroundGrossInvadedArea
    if(savedData.projectBackgroundGrossInvadedArea !== null){
        cookieData.projectBackgroundGrossInvadedArea = savedData.projectBackgroundGrossInvadedArea;
    }else{ stepFail = true; }
    
    /*
    //projectBackgroundNetInvadedArea
    if(savedData.projectBackgroundNetInvadedArea !== null){
        cookieData.projectBackgroundNetInvadedArea = savedData.projectBackgroundNetInvadedArea;
    }else{ stepFail = true; }

    //projectBackgroundNumberOfOccurances
    if(savedData.projectBackgroundNumberOfOccurances !== null){
        cookieData.projectBackgroundNumberOfOccurances = savedData.projectBackgroundNumberOfOccurances;
    }else{ stepFail = true; }
    */

    // 1.3
    if(stepFail === false){
        completedSteps.push("1.3");
    }
    stepFail = false;

    //projectBackgroundImapShareResults
    if(savedData.projectBackgroundImapShareResults !== null){
        cookieData.projectBackgroundImapShareResults = savedData.projectBackgroundImapShareResults;
    }else{ stepFail = true; }
    
    /*
    //projectBackgroundImapAccount
    if(savedData.projectBackgroundImapAccount !== null){
        cookieData.projectBackgroundImapAccount = savedData.projectBackgroundImapAccount;
    }else{ stepFail = true; }
    */

    // 1.4
    if(stepFail === false){
        completedSteps.push("1.4");
    }
    stepFail = false;
    
    //------------------------------------------------------------------------\\
    // Strategy Selection                                                     \\
    //------------------------------------------------------------------------\\
    //strategySelectionEcologicalImpact
    //strategySelectionLimitedDistribution
    //strategySelectionWidespreadDistribution
    //strategySelectionNegligibleImpact
    //strategySelectionSignificantHarm
    //strategySelectionDocumentation
    // 2.1
    //strategySelectionNYSScore
    if(savedData.strategySelectionNYSScore !== null){
        cookieData.strategySelectionNYSScore = savedData.strategySelectionNYSScore;
    }else{ stepFail = true; }

    if(stepFail === false){
        completedSteps.push("2.1");
    }
    stepFail = false;

    // 2.2
    if(savedData.strategySelectionAbundanceAndDistributionCheckbox !== null){
        cookieData.strategySelectionAbundanceAndDistributionCheckbox = savedData.strategySelectionAbundanceAndDistributionCheckbox;
    }else{ stepFail = true; }

    if(stepFail === false){
        completedSteps.push("2.2");
    }
    stepFail = false;


    // TODO: UPDATE HERE
    //------------------------------------------------------------------------\\
    // Eradication                                                            \\
    //------------------------------------------------------------------------\\
    // TODO: UPDATE HERE
    //------------------------------------------------------------------------\\
    // Containment                                                            \\
    //------------------------------------------------------------------------\\
    // TODO: UPDATE HERE
    //------------------------------------------------------------------------\\
    // Suppression                                                            \\
    //------------------------------------------------------------------------\\
    // TODO: UPDATE HERE
    //------------------------------------------------------------------------\\
    // Recommendation Summary                                                 \\
    //------------------------------------------------------------------------\\
    // TODO: UPDATE HERE

    // Being Process
    Check_Available_Steps(cookieData, completedSteps, currentStep);
};

/***********************************************\
 * Step(1) - Project Background                *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Project_Background(cookieData, completedSteps, currentStep){
    // Ensure Step Container is visible and all others are display:none
    if($('#content_step_project_background_container').hasClass('content_step_inactive')){
        $('#content_step_project_background_container').removeClass('content_step_inactive').addClass('content_step_active');
    }
    // TODO: UPDATE HERE
    
    // Make sure the correct substep is displayed
    if($('#content_step_project_background_content_container').hasClass('content_step_content_container_active')){
        $('#content_step_project_background_content_container').removeClass('content_step_content_container_active').addClass('content_step_content_container_inactive');
    }
    if($('#content_step_project_timeframe_content_container').hasClass('content_step_content_container_active')){
        $('#content_step_project_timeframe_content_container').removeClass('content_step_content_container_active').addClass('content_step_content_container_inactive');
    }
    if($('#content_step_distribution_and_abundance_content_container').hasClass('content_step_content_container_active')){
        $('#content_step_distribution_and_abundance_content_container').removeClass('content_step_content_container_active').addClass('content_step_content_container_inactive');
    }
    if($('#content_step_imapinvasives_content_container').hasClass('content_step_content_container_active')){
        $('#content_step_imapinvasives_content_container').removeClass('content_step_content_container_active').addClass('content_step_content_container_inactive');
    }
    if(currentStep === "1.1"){
        if($('#content_step_project_background_content_container').hasClass('content_step_content_container_inactive')){
            $('#content_step_project_background_content_container').removeClass('content_step_content_container_inactive').addClass('content_step_content_container_active');
        }
        if($('#content_nav_back').hasClass('content_nav_base_active')){
            $('#content_nav_back').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
        }
    }else if(currentStep === "1.2"){
        if($('#content_step_project_timeframe_content_container').hasClass('content_step_content_container_inactive')){
            $('#content_step_project_timeframe_content_container').removeClass('content_step_content_container_inactive').addClass('content_step_content_container_active');
        }
        if($('#content_nav_back').hasClass('content_nav_base_inactive')){
            $('#content_nav_back').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
        }
    }else if(currentStep === "1.3"){
        if($('#content_step_distribution_and_abundance_content_container').hasClass('content_step_content_container_inactive')){
            $('#content_step_distribution_and_abundance_content_container').removeClass('content_step_content_container_inactive').addClass('content_step_content_container_active');
        }
        if($('#content_nav_back').hasClass('content_nav_base_inactive')){
            $('#content_nav_back').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
        }
    }else if(currentStep === "1.4"){
        if($('#content_step_imapinvasives_content_container').hasClass('content_step_content_container_inactive')){
            $('#content_step_imapinvasives_content_container').removeClass('content_step_content_container_inactive').addClass('content_step_content_container_active');
        }
        if($('#content_nav_back').hasClass('content_nav_base_inactive')){
            $('#content_nav_back').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
        }
    }

    // Declare Variables
    var projectBackgroundArray = {
            projectBackgroundAssessorsAnswer: null,
            projectBackgroundAssessorsDateAnswer: null,
            projectBackgroundScientificNameAnswer: null,
            projectBackgroundCommonNameAnswer: null,
            projectBackgroundScaleAnswer: null,
            projectBackgroundPRISMWMAAnswer: null,
            projectBackgroundConservationTargetImpactedAnswer: null,
            projectBackgroundProjectAreaNameAnswer: null,
            projectBackgroundProjectAreaSizeAnswer: null,
            projectBackgroundPropertyOwnersAnswer: null,
            projectBackgroundProjectStateAnswer: null,
            projectBackgroundProjectCountyAnswer: null,
            projectBackgroundProjectCoordXAnswer: null,
            projectBackgroundProjectCoordYAnswer: null,
            projectBackgroundProjectCoordSystemAnswer: null,
            projectBackgroundProjectGoalAnswer: null,
            projectBackgroundNumberOfYearsToCompleteAnswer: null,
            projectBackgroundStartDateAnswer: null,
            projectBackgroundEndDateAnswer: null,
            projectBackgroundOngoingProjectAnswer: null,
            projectBackgroundControlRequiredAnswer: null,
            projectBackgroundGrossInvadedAreaAnswer: null,
            projectBackgroundNetInvadedAreaAnswer: null,
            projectBackgroundNumberOfOccurancesAnswer: null,
            projectBackgroundImapShareResultsAnswer: null,
            projectBackgroundImapAccountAnswer: null
        },
        saveArray = {};
    
    // Subcategory Values

    // Date Picker
    new JsDatePick({
        useMode: 2,
        target: 'project_background_assessors_date',
        cellColorScheme: '../static/css/img/ocean_blue',
        limitToToday: true
    });
    new JsDatePick({
        useMode: 2,
        target: 'project_background_start_date',
        cellColorScheme: '../static/css/img/ocean_blue',
        limitToToday: true
    });
    new JsDatePick({
        useMode: 2,
        target: 'project_background_end_date',
        cellColorScheme: '../static/css/img/ocean_blue',
        limitToToday: true
    });

    // Check if loading data
    var completedStepsLength = completedSteps.length;
    for(var i=0; i<completedStepsLength; i++){
        if(completedSteps[i] === "1.1"){
            if(currentStep === "1.1"){
                // Load Question Answers
                projectBackgroundArray.projectBackgroundAssessorsAnswer = cookieData.projectBackgroundAssessors;
                projectBackgroundArray.projectBackgroundAssessorsDateAnswer = cookieData.projectBackgroundAssessorsDate;
                projectBackgroundArray.projectBackgroundScientificNameAnswer = cookieData.projectBackgroundScientificName;
                projectBackgroundArray.projectBackgroundCommonNameAnswer = cookieData.projectBackgroundCommonName;
                projectBackgroundArray.projectBackgroundScaleAnswer = cookieData.projectBackgroundScale;
                projectBackgroundArray.projectBackgroundPRISMWMAAnswer = cookieData.projectBackgroundPRISMWMA;
                projectBackgroundArray.projectBackgroundConservationTargetImpactedAnswer = cookieData.projectBackgroundConservationTargetImpacted;
                projectBackgroundArray.projectBackgroundProjectAreaNameAnswer = cookieData.projectBackgroundProjectAreaName;
                projectBackgroundArray.projectBackgroundProjectAreaSizeAnswer = cookieData.projectBackgroundProjectAreaSize;
                projectBackgroundArray.projectBackgroundPropertyOwnersAnswer = cookieData.projectBackgroundPropertyOwners;
                projectBackgroundArray.projectBackgroundProjectStateAnswer = cookieData.projectBackgroundProjectState;
                projectBackgroundArray.projectBackgroundProjectCountyAnswer = cookieData.projectBackgroundProjectCounty;
                projectBackgroundArray.projectBackgroundProjectCoordXAnswer = cookieData.projectBackgroundProjectCoordX;
                projectBackgroundArray.projectBackgroundProjectCoordYAnswer = cookieData.projectBackgroundProjectCoordY;
                projectBackgroundArray.projectBackgroundProjectCoordSystemAnswer = cookieData.projectBackgroundProjectCoordSystem;
                projectBackgroundArray.projectBackgroundProjectGoalAnswer = cookieData.projectBackgroundProjectGoal;
                
                // Populate Fields w/ values
                $('#project_background_assessors').prop('value', projectBackgroundArray.projectBackgroundAssessorsAnswer);
                $('#project_background_assessors_date').prop('value', projectBackgroundArray.projectBackgroundAssessorsDateAnswer);
                $('#project_background_scientific_name').prop('value', projectBackgroundArray.projectBackgroundScientificNameAnswer);
                $('#project_background_common_name').prop('value', projectBackgroundArray.projectBackgroundCommonNameAnswer);
                $('#project_background_scale').prop('value', projectBackgroundArray.projectBackgroundScaleAnswer);
                $('#project_background_PRISMWMA').prop('value', projectBackgroundArray.projectBackgroundPRISMWMAAnswer);
                $('#project_background_conservation_target_impacted').prop('value', projectBackgroundArray.projectBackgroundConservationTargetImpactedAnswer);
                $('#project_background_project_area_name').prop('value', projectBackgroundArray.projectBackgroundProjectAreaNameAnswer);
                $('#project_background_project_area_size').prop('value', projectBackgroundArray.projectBackgroundProjectAreaSizeAnswer);
                $('#project_background_property_owners').prop('value', projectBackgroundArray.projectBackgroundPropertyOwnersAnswer);
                $('#project_background_project_state').prop('value', projectBackgroundArray.projectBackgroundProjectStateAnswer);
                $('#project_background_project_county').prop('value', projectBackgroundArray.projectBackgroundProjectCountyAnswer);
                $('#project_background_project_coord_x').prop('value', projectBackgroundArray.projectBackgroundProjectCoordXAnswer);
                $('#project_background_project_coord_y').prop('value', projectBackgroundArray.projectBackgroundProjectCoordYAnswer);
                $('#project_background_project_coord_system').prop('value', projectBackgroundArray.projectBackgroundProjectCoordSystemAnswer);
                $('#project_background_project_goal').prop('value', projectBackgroundArray.projectBackgroundProjectGoalAnswer);
            }
        }
        if(completedSteps[i] === "1.2"){
            projectBackgroundArray.projectBackgroundNumberOfYearsToCompleteAnswer = cookieData.projectBackgroundNumberOfYearsToComplete;
            projectBackgroundArray.projectBackgroundStartDateAnswer = cookieData.projectBackgroundStartDate;
            projectBackgroundArray.projectBackgroundEndDateAnswer = cookieData.projectBackgroundEndDate;
            projectBackgroundArray.projectBackgroundOngoingProjectAnswer = cookieData.projectBackgroundOngoingProject;
            projectBackgroundArray.projectBackgroundControlRequiredAnswer = cookieData.projectBackgroundControlRequired;

            // Populate Fields w/ values
            $('#project_background_number_of_years_to_complete').prop('value', projectBackgroundArray.projectBackgroundNumberOfYearsToCompleteAnswer);
            $('#project_background_start_date').prop('value', projectBackgroundArray.projectBackgroundStartDateAnswer);
            $('#project_background_end_date').prop('value', projectBackgroundArray.projectBackgroundEndDateAnswer);
            $('#project_background_ongoing_project').prop('value', projectBackgroundArray.projectBackgroundOngoingProjectAnswer);
            $('#project_background_control_required').prop('value', projectBackgroundArray.projectBackgroundControlRequiredAnswer);
        }
        if(completedSteps[i] === "1.3"){
            projectBackgroundArray.projectBackgroundGrossInvadedAreaAnswer = cookieData.projectBackgroundGrossInvadedArea;
            projectBackgroundArray.projectBackgroundNetInvadedAreaAnswer = cookieData.projectBackgroundNetInvadedArea;
            projectBackgroundArray.projectBackgroundNumberOfOccurancesAnswer = cookieData.projectBackgroundNumberOfOccurances;

            // Populate Fields w/ values
            $('#project_background_gross_invaded_area').prop('value', projectBackgroundArray.projectBackgroundGrossInvadedAreaAnswer);
            $('#project_background_net_invaded_area').prop('value', projectBackgroundArray.projectBackgroundNetInvadedAreaAnswer);
            $('#project_background_number_of_occurances').prop('value', projectBackgroundArray.projectBackgroundNumberOfOccurancesAnswer);
        }
        if(completedSteps[i] === "1.4"){
            projectBackgroundArray.projectBackgroundImapShareResultsAnswer = cookieData.projectBackgroundImapShareResults;
            projectBackgroundArray.projectBackgroundImapAccountAnswer = cookieData.projectBackgroundImapAccount;

            // Populate Fields w/ values
            $('#project_background_imap_share_results').prop('value', projectBackgroundArray.projectBackgroundImapShareResultsAnswer);
            $('#project_background_imap_account').prop('value', projectBackgroundArray.projectBackgroundImapAccountAnswer);
        }
    }

    // Function Form Checks & Misc Functions
    function Project_Background_Substep_One_Check(form_array){
        if(form_array.projectBackgroundAssessorsAnswer !== null){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                $('#content_nav_forward').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
                // Progress Bar
                $('#content_step_project_background_substep_two').removeClass('content_substep_inactive').addClass('content_substep_available');
            }
        }else{
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                $('#content_nav_forward').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
                // Progress Bar
                $('#content_step_project_background_substep_two').removeClass('content_substep_available').addClass('content_substep_inactive');
            } 
        }
    };
    function Project_Background_Substep_Two_Check(form_array){
        if(form_array.projectBackgroundNumberOfYearsToCompleteAnswer !== null){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                $('#content_nav_forward').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
                // Progress Bar
                $('#content_step_project_background_substep_three').removeClass('content_substep_inactive').addClass('content_substep_available');
            }
        }else{
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                $('#content_nav_forward').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
                // Progress Bar
                $('#content_step_project_background_substep_three').removeClass('content_substep_available').addClass('content_substep_inactive');
            } 
        }
    };
    function Project_Background_Substep_Three_Check(form_array){
        if(form_array.projectBackgroundGrossInvadedAreaAnswer !== null){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                $('#content_nav_forward').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
                // Progress Bar
                $('#content_step_project_background_substep_four').removeClass('content_substep_inactive').addClass('content_substep_available');
            }
        }else{
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                $('#content_nav_forward').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
                // Progress Bar
                $('#content_step_project_background_substep_four').removeClass('content_substep_available').addClass('content_substep_inactive');
            } 
        }
    };
    function Project_Background_Substep_Four_Check(form_array){
        if(form_array.projectBackgroundImapShareResultsAnswer !== null){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                $('#content_nav_forward').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
                // Progress Bar
                $('#content_progress_bar_strategy_selection').removeClass('progress_bar_inactive').addClass('progress_bar_available');
            }
        }else{
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                $('#content_nav_forward').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
                // Progress Bar
                $('#content_progress_bar_strategy_selection').removeClass('progress_bar_available').addClass('progress_bar_inactive');
            } 
        }
    };
    
    function Project_Background_Substep_One_Save(){
        // Manual Entry on DatePickers
        if($('#project_background_assessors_date').prop('value') === ""){
            projectBackgroundArray.projectBackgroundAssessorsDateAnswer = null;
        }else{
            projectBackgroundArray.projectBackgroundAssessorsDateAnswer = $('#project_background_assessors_date').val();
        }
        // Populate saveArray
        saveArray = {
            projectBackgroundAssessors: projectBackgroundArray.projectBackgroundAssessorsAnswer,
            projectBackgroundAssessorsDate: projectBackgroundArray.projectBackgroundAssessorsDateAnswer,
            projectBackgroundScientificName: projectBackgroundArray.projectBackgroundScientificNameAnswer,
            projectBackgroundCommonName: projectBackgroundArray.projectBackgroundCommonNameAnswer,
            projectBackgroundScale: projectBackgroundArray.projectBackgroundScaleAnswer,
            projectBackgroundPRISMWMA: projectBackgroundArray.projectBackgroundPRISMWMAAnswer,
            projectBackgroundConservationTargetImpacted: projectBackgroundArray.projectBackgroundConservationTargetImpactedAnswer,
            projectBackgroundProjectAreaName: projectBackgroundArray.projectBackgroundProjectAreaNameAnswer,
            projectBackgroundProjectAreaSize: projectBackgroundArray.projectBackgroundProjectAreaSizeAnswer,
            projectBackgroundPropertyOwners: projectBackgroundArray.projectBackgroundPropertyOwnersAnswer,
            projectBackgroundProjectState: projectBackgroundArray.projectBackgroundProjectStateAnswer,
            projectBackgroundProjectCounty: projectBackgroundArray.projectBackgroundProjectCountyAnswer,
            projectBackgroundProjectCoordX: projectBackgroundArray.projectBackgroundProjectCoordXAnswer,
            projectBackgroundProjectCoordY: projectBackgroundArray.projectBackgroundProjectCoordYAnswer,
            projectBackgroundProjectCoordSystem: projectBackgroundArray.projectBackgroundProjectCoordSystemAnswer,
            projectBackgroundProjectGoal: projectBackgroundArray.projectBackgroundProjectGoalAnswer
        };
        if(projectBackgroundArray.projectBackgroundAssessorsAnswer !== null){
            var addStep = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === "1.1"){
                    addStep = false;
                }
            }
            if(addStep === true){
                completedSteps.push("1.1");
            }
        }
        Save_Cookie(saveArray, "1.1", completedSteps);
    };

    function Project_Background_Substep_Two_Save(){
        // Manual Entry on DatePickers
        if($('#project_background_start_date').prop('value') === ""){
            projectBackgroundArray.projectBackgroundStartDateAnswer = null;
        }else{
            projectBackgroundArray.projectBackgroundStartDateAnswer = $('#project_background_start_date').val();
        }
        if($('#project_background_end_date').prop('value') === ""){
            projectBackgroundArray.projectBackgroundEndDateAnswer = null;
        }else{
            projectBackgroundArray.projectBackgroundEndDateAnswer = $('#project_background_end_date').val();
        }
        // Populate saveArray
        saveArray = {
            projectBackgroundNumberOfYearsToComplete: projectBackgroundArray.projectBackgroundNumberOfYearsToCompleteAnswer,
            projectBackgroundStartDate: projectBackgroundArray.projectBackgroundStartDateAnswer,
            projectBackgroundEndDate: projectBackgroundArray.projectBackgroundEndDateAnswer,
            projectBackgroundOngoingProject: projectBackgroundArray.projectBackgroundOngoingProjectAnswer,
            projectBackgroundControlRequired: projectBackgroundArray.projectBackgroundControlRequiredAnswer
        };
        if(projectBackgroundArray.projectBackgroundNumberOfYearsToCompleteAnswer !== null){
            var addStep = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === "1.2"){
                    addStep = false;
                }
            }
            if(addStep === true){
                completedSteps.push("1.2");
            }
        }
        Save_Cookie(saveArray, "1.2", completedSteps);
    };
    function Project_Background_Substep_Three_Save(){
        saveArray = {
            projectBackgroundGrossInvadedArea: projectBackgroundArray.projectBackgroundGrossInvadedAreaAnswer,
            projectBackgroundNetInvadedArea: projectBackgroundArray.projectBackgroundNetInvadedAreaAnswer,
            projectBackgroundNumberOfOccurances: projectBackgroundArray.projectBackgroundNumberOfOccurancesAnswer
        };
        if(projectBackgroundArray.projectBackgroundGrossInvadedAreaAnswer !== null){
            var addStep = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === "1.3"){
                    addStep = false;
                }
            }
            if(addStep === true){
                completedSteps.push("1.3");
            }
        }
        Save_Cookie(saveArray, "1.3", completedSteps);
    };
    function Project_Background_Substep_Four_Save(){
        saveArray = {
            projectBackgroundImapShareResults: projectBackgroundArray.projectBackgroundImapShareResultsAnswer,
            projectBackgroundImapAccount: projectBackgroundArray.projectBackgroundImapAccountAnswer
        };
        if(projectBackgroundArray.projectBackgroundImapShareResultsAnswer !== null){
            var addStep = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === "1.4"){
                    addStep = false;
                }
            }
            if(addStep === true){
                completedSteps.push("1.4");
            }
        }
        Save_Cookie(saveArray, "1.4", completedSteps);
    };


    // Base following code on substep number
    function Add_Event_To_Field(fieldLocation, substep){
        var tempHolder;
        $(fieldLocation).keyup(function(){
            if($(fieldLocation).prop('value') === ""){
                tempHolder = null;
            }else{
                tempHolder = $(fieldLocation).val();
            }
            if(fieldLocation === "#project_background_assessors"){ projectBackgroundArray.projectBackgroundAssessorsAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_scientific_name"){ projectBackgroundArray.projectBackgroundScientificNameAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_common_name"){ projectBackgroundArray.projectBackgroundCommonNameAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_scale"){ projectBackgroundArray.projectBackgroundScaleAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_PRISMWMA"){ projectBackgroundArray.projectBackgroundPRISMWMAAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_conservation_target_impacted"){ projectBackgroundArray.projectBackgroundConservationTargetImpactedAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_project_area_name"){ projectBackgroundArray.projectBackgroundProjectAreaNameAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_project_area_size"){ projectBackgroundArray.projectBackgroundProjectAreaSizeAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_property_owners"){ projectBackgroundArray.projectBackgroundPropertyOwnersAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_project_state"){ projectBackgroundArray.projectBackgroundProjectStateAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_project_county"){ projectBackgroundArray.projectBackgroundProjectCountyAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_project_coord_x"){ projectBackgroundArray.projectBackgroundProjectCoordXAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_project_coord_y"){ projectBackgroundArray.projectBackgroundProjectCoordYAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_project_coord_system"){ projectBackgroundArray.projectBackgroundProjectCoordSystemAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_project_goal"){ projectBackgroundArray.projectBackgroundProjectGoalAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_number_of_years_to_complete"){ projectBackgroundArray.projectBackgroundNumberOfYearsToCompleteAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_ongoing_project"){ projectBackgroundArray.projectBackgroundOngoingProjectAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_control_required"){ projectBackgroundArray.projectBackgroundControlRequiredAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_gross_invaded_area"){ projectBackgroundArray.projectBackgroundGrossInvadedAreaAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_net_invaded_area"){ projectBackgroundArray.projectBackgroundNetInvadedAreaAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_number_of_occurances"){ projectBackgroundArray.projectBackgroundNumberOfOccurancesAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_imap_share_results"){ projectBackgroundArray.projectBackgroundImapShareResultsAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_imap_account"){ projectBackgroundArray.projectBackgroundImapAccountAnswer = tempHolder; }

            if(substep === "1"){
                Project_Background_Substep_One_Check(projectBackgroundArray);
            }else if(substep === "2"){
                Project_Background_Substep_Two_Check(projectBackgroundArray);
            }else if(substep === "3"){
                Project_Background_Substep_Three_Check(projectBackgroundArray);
            }else if(substep === "4"){
                Project_Background_Substep_Four_Check(projectBackgroundArray);
            }
        });
    };
    if(currentStep === "1.1"){
        Project_Background_Substep_One_Check(projectBackgroundArray);
        Add_Event_To_Field("#project_background_assessors", "1");
        Add_Event_To_Field("#project_background_scientific_name", "1");
        Add_Event_To_Field("#project_background_common_name", "1");
        Add_Event_To_Field("#project_background_scale", "1");
        Add_Event_To_Field("#project_background_PRISMWMA", "1");
        Add_Event_To_Field("#project_background_conservation_target_impacted", "1");
        Add_Event_To_Field("#project_background_project_area_name", "1");
        Add_Event_To_Field("#project_background_project_area_size", "1");
        Add_Event_To_Field("#project_background_property_owners", "1");
        Add_Event_To_Field("#project_background_project_state", "1");
        Add_Event_To_Field("#project_background_project_county", "1");
        Add_Event_To_Field("#project_background_project_coord_x", "1");
        Add_Event_To_Field("#project_background_project_coord_y", "1");
        Add_Event_To_Field("#project_background_project_coord_system", "1");
        Add_Event_To_Field("#project_background_project_goal", "1");
    }else if(currentStep === "1.2"){
        Project_Background_Substep_Two_Check(projectBackgroundArray);
        Add_Event_To_Field("#project_background_number_of_years_to_complete", "2");
        Add_Event_To_Field("#project_background_ongoing_project", "2");
        Add_Event_To_Field("#project_background_control_required", "2");
    }else if(currentStep === "1.3"){
        Project_Background_Substep_Three_Check(projectBackgroundArray);
        Add_Event_To_Field("#project_background_gross_invaded_area", "3");
        Add_Event_To_Field("#project_background_net_invaded_area", "3");
        Add_Event_To_Field("#project_background_number_of_occurances", "3");
    }else if(currentStep === "1.4"){
        Project_Background_Substep_Four_Check(projectBackgroundArray);
        Add_Event_To_Field("#project_background_imap_share_results", "4");
        Add_Event_To_Field("#project_background_imap_account", "4");
    }
    
    function Add_Event_To_Nav(destinationArray){
        $('#content_nav_forward').click(function(){
            if(destinationArray.forward !== "none"){
                if($('#content_nav_forward').hasClass('content_nav_base_active')){
                    if(destinationArray.current === "1.1"){ Project_Background_Substep_One_Save();
                    }else if(destinationArray.current === "1.2"){ Project_Background_Substep_Two_Save();
                    }else if(destinationArray.current === "1.3"){ Project_Background_Substep_Three_Save();
                    }else if(destinationArray.current === "1.4"){ Project_Background_Substep_Four_Save(); }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.forward);
                }
            }
        });
        $('#content_nav_back').click(function(){
            if(destinationArray.back !== "none"){
                if($('#content_nav_back').hasClass('content_nav_base_active')){
                    if(destinationArray.current === "1.1"){ Project_Background_Substep_One_Save();
                    }else if(destinationArray.current === "1.2"){ Project_Background_Substep_Two_Save();
                    }else if(destinationArray.current === "1.3"){ Project_Background_Substep_Three_Save();
                    }else if(destinationArray.current === "1.4"){ Project_Background_Substep_Four_Save(); }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.back);
                }
            }
        });
        $('#content_step_project_background_substep_one').click(function(){
            if(destinationArray.substep_one !== "none"){
                if($('#content_step_project_background_substep_one').hasClass('content_substep_available')){
                    if(destinationArray.current === "1.1"){ Project_Background_Substep_One_Save();
                    }else if(destinationArray.current === "1.2"){ Project_Background_Substep_Two_Save();
                    }else if(destinationArray.current === "1.3"){ Project_Background_Substep_Three_Save();
                    }else if(destinationArray.current === "1.4"){ Project_Background_Substep_Four_Save(); }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_one);
                }
            }
        });
        $('#content_step_project_background_substep_two').click(function(){
            if(destinationArray.substep_two !== "none"){
                if($('#content_step_project_background_substep_two').hasClass('content_substep_available')){
                    if(destinationArray.current === "1.1"){ Project_Background_Substep_One_Save();
                    }else if(destinationArray.current === "1.2"){ Project_Background_Substep_Two_Save();
                    }else if(destinationArray.current === "1.3"){ Project_Background_Substep_Three_Save();
                    }else if(destinationArray.current === "1.4"){ Project_Background_Substep_Four_Save(); }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_two);
                }
            }
        });
        $('#content_step_project_background_substep_three').click(function(){
            if(destinationArray.substep_three !== "none"){
                if($('#content_step_project_background_substep_three').hasClass('content_substep_available')){
                    if(destinationArray.current === "1.1"){ Project_Background_Substep_One_Save();
                    }else if(destinationArray.current === "1.2"){ Project_Background_Substep_Two_Save();
                    }else if(destinationArray.current === "1.3"){ Project_Background_Substep_Three_Save();
                    }else if(destinationArray.current === "1.4"){ Project_Background_Substep_Four_Save(); }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_three);
                }
            }
        });
        $('#content_step_project_background_substep_four').click(function(){
            if(destinationArray.substep_four !== "none"){
                if($('#content_step_project_background_substep_four').hasClass('content_substep_available')){
                    if(destinationArray.current === "1.1"){ Project_Background_Substep_One_Save();
                    }else if(destinationArray.current === "1.2"){ Project_Background_Substep_Two_Save();
                    }else if(destinationArray.current === "1.3"){ Project_Background_Substep_Three_Save();
                    }else if(destinationArray.current === "1.4"){ Project_Background_Substep_Four_Save(); }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_four);
                }
            }
        });
        $('#content_progress_bar_project_background').click(function(){
            if(destinationArray.projectBackground !== "none"){
                if($('#content_progress_bar_project_background').hasClass('progress_bar_available')){
                    if(destinationArray.current === "1.1"){ Project_Background_Substep_One_Save();
                    }else if(destinationArray.current === "1.2"){ Project_Background_Substep_Two_Save();
                    }else if(destinationArray.current === "1.3"){ Project_Background_Substep_Three_Save();
                    }else if(destinationArray.current === "1.4"){ Project_Background_Substep_Four_Save(); }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.projectBackground);
                }
            }
        });
        $('#content_progress_bar_strategy_selection').click(function(){
            if(destinationArray.strategySelection !== "none"){
                if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_available')){
                    if(destinationArray.current === "1.1"){ Project_Background_Substep_One_Save();
                    }else if(destinationArray.current === "1.2"){ Project_Background_Substep_Two_Save();
                    }else if(destinationArray.current === "1.3"){ Project_Background_Substep_Three_Save();
                    }else if(destinationArray.current === "1.4"){ Project_Background_Substep_Four_Save(); }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.strategySelection);
                }
            }
        });
    };

    // Assign Events to Nav Buttons
    if(currentStep === "1.1"){
        var destinationArray = {
            current: '1.1',
            forward: '1.2',
            back: 'none',
            substep_one: 'none',
            substep_two: '1.2',
            substep_three: '1.3',
            substep_four: '1.4',
            projectBackground: 'none',
            strategySelection: '2.1'
        };
    }else if(currentStep === "1.2"){
        var destinationArray = {
            current: '1.2',
            forward: '1.3',
            back: '1.1',
            substep_one: '1.1',
            substep_two: 'none',
            substep_three: '1.3',
            substep_four: '1.4',
            projectBackground: 'none',
            strategySelection: '2.1'
        };
    }else if(currentStep === "1.3"){
        var destinationArray = {
            current: '1.3',
            forward: '1.4',
            back: '1.2',
            substep_one: '1.1',
            substep_two: '1.2',
            substep_three: 'none',
            substep_four: '1.4',
            projectBackground: 'none',
            strategySelection: '2.1'
        };
    }else if(currentStep === "1.4"){
        var destinationArray = {
            current: '1.4',
            forward: '2.1',
            back: '1.3',
            substep_one: '1.1',
            substep_two: '1.2',
            substep_three: '1.3',
            substep_four: 'none',
            projectBackground: 'none',
            strategySelection: '2.1'
        };
    }
    Add_Event_To_Nav(destinationArray);
};

/***********************************************\
 * Step(2) - Strategy Selection                *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Strategy_Selection(cookieData, completedSteps, currentStep){
    // Ensure Step Container is visible and all others are display:none
    if($('#content_step_strategy_selection_container').hasClass('content_step_inactive')){
        $('#content_step_strategy_selection_container').removeClass('content_step_inactive').addClass('content_step_active');
    }
    
    // Make sure the correct substep is displayed
    if($('#content_step_strategy_selection_content_container').hasClass('content_step_content_container_active')){
        $('#content_step_strategy_selection_content_container').removeClass('content_step_content_container_active').addClass('content_step_content_container_inactive');
    }
    if($('#content_step_abundance_and_distribution_content_container').hasClass('content_step_content_container_active')){
        $('#content_step_abundance_and_distribution_content_container').removeClass('content_step_content_container_active').addClass('content_step_content_container_inactive');
    }
    // TODO: UPDATE HERE

    if(currentStep === "2.1"){
        if($('#content_step_strategy_selection_content_container').hasClass('content_step_content_container_inactive')){
            $('#content_step_strategy_selection_content_container').removeClass('content_step_content_container_inactive').addClass('content_step_content_container_active');
        }
        if($('#content_nav_back').hasClass('content_nav_base_inactive')){
            $('#content_nav_back').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
        }
    }else if(currentStep === "2.2"){
        if($('#content_step_abundance_and_distribution_content_container').hasClass('content_step_content_container_inactive')){
            $('#content_step_abundance_and_distribution_content_container').removeClass('content_step_content_container_inactive').addClass('content_step_content_container_active');
        }
        if($('#content_nav_back').hasClass('content_nav_base_inactive')){
            $('#content_nav_back').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
        }
    }else if(currentStep === "2.3"){
        // TODO: UPDATE HERE
    }else if(currentStep === "2.4"){
        // TODO: UPDATE HERE
    }

    // Declare Variables
    var strategySelectionArray = {
            strategySelectionNYSScoreAnswer: null,
            strategySelectionCheckboxAnswer: null,
            strategySelectionDocumentationAnswer: null,
            strategySelectionAbundanceAndDistributionCheckboxAnswer: null,
            strategySelectionAbundanceAndDistributionDocumentationAnswer: null
        },
        saveArray = {};
    
    // Subcategory Values

    // Check if loading data
    var completedStepsLength = completedSteps.length;
    for(var i=0; i<completedStepsLength; i++){
        if(completedSteps[i] === "2.1"){
            // Load Question Answers
            strategySelectionArray.strategySelectionNYSScoreAnswer = cookieData.strategySelectionNYSScore;
            strategySelectionArray.strategySelectionCheckboxAnswer = cookieData.strategySelectionCheckbox;
            strategySelectionArray.strategySelectionDocumentationAnswer = cookieData.strategySelectionDocumentation;
            
            // Populate Fields w/ values
            $('#strategy_selection_NYS_score').prop('value', strategySelectionArray.strategySelectionNYSScoreAnswer);

            if(strategySelectionArray.strategySelectionCheckboxAnswer === "ecologicalImpact"){
                $('#strategy_selection_ecological_impact').prop('checked', true);
            }else if(strategySelectionArray.strategySelectionCheckboxAnswer === "limitedDistribution"){
                $('#strategy_selection_limited_distribution').prop('checked', true);
            }else if(strategySelectionArray.strategySelectionCheckboxAnswer === "widespreadDistribution"){
                $('#strategy_selection_widespread_distribution').prop('checked', true);
            }else if(strategySelectionArray.strategySelectionCheckboxAnswer === "negligibleImpact"){
                $('#strategy_selection_negligible_impact').prop('checked', true);
            }else if(strategySelectionArray.strategySelectionCheckboxAnswer === "significantHarm"){
                $('#strategy_selection_significant_harm').prop('checked', true);
            }

            $('#strategy_selection_documentation').prop('value', strategySelectionArray.strategySelectionDocumentationAnswer);
        }
        if(completedSteps[i] === "2.2"){
            // Load Question Answers
            strategySelectionArray.strategySelectionAbundanceAndDistributionCheckboxAnswer = cookieData.strategySelectionAbundanceAndDistributionCheckbox;
            strategySelectionArray.strategySelectionAbundanceAndDistributionDocumentationAnswer = cookieData.strategySelectionAbundanceAndDistributionDocumentation;

            // Populate Fields w/ values
            if(strategySelectionArray.strategySelectionAbundanceAndDistributionCheckboxAnswer === "eradicationStateScale"){
                $('#strategy_selection_eradication_state_scale').prop('checked', true);
            }else if(strategySelectionArray.strategySelectionAbundanceAndDistributionCheckboxAnswer === "containmentStateScale"){
                $('#strategy_selection_containment_state_scale').prop('checked', true);
            }else if(strategySelectionArray.strategySelectionAbundanceAndDistributionCheckboxAnswer === "eradicationProjectScale"){
                $('#strategy_selection_eradication_project_scale').prop('checked', true);
            }else if(strategySelectionArray.strategySelectionAbundanceAndDistributionCheckboxAnswer === "containmentProjectScale"){
                $('#strategy_selection_containment_project_scale').prop('checked', true);
            }else if(strategySelectionArray.strategySelectionAbundanceAndDistributionCheckboxAnswer === "suppression"){
                $('#strategy_selection_suppression').prop('checked', true);
            }

            $('#strategy_selection_abundance_and_distribution_documentation').prop('value', strategySelectionArray.strategySelectionAbundanceAndDistributionDocumentationAnswer);
        }
        if(completedSteps[i] === "2.3"){
            // Load Question Answers

            // Populate Fields w/ values
        }
        if(completedSteps[i] === "2.4"){
            // Load Question Answers

            // Populate Fields w/ values
        }
    }

    // Function Form Checks & Misc Functions
    function Strategy_Selection_Substep_One_Check(form_array){
        if(form_array.strategySelectionNYSScoreAnswer !== null){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                $('#content_nav_forward').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
                // Progress Bar
                $('#content_step_strategy_selection_substep_two').removeClass('content_substep_inactive').addClass('content_substep_available');
            }
        }else if(form_array.strategySelectionNYSScoreAnswer === null){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                $('#content_nav_forward').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
                // Progress Bar
                $('#content_step_strategy_selection_substep_two').removeClass('content_substep_available').addClass('content_substep_inactive');
            } 
        }
    };
    function Strategy_Selection_Substep_Two_Check(form_array){
        if(form_array.strategySelectionAbundanceAndDistributionCheckboxAnswer !== null){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                $('#content_nav_forward').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
                // Progress Bar
                $('#content_step_strategy_selection_substep_three').removeClass('content_substep_inactive').addClass('content_substep_available');
            }
        }else if(form_array.strategySelectionAbundanceAndDistributionCheckboxAnswer === null){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                $('#content_nav_forward').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
                // Progress Bar
                $('#content_step_strategy_selection_substep_three').removeClass('content_substep_available').addClass('content_substep_inactive');
            } 
        }
    };
    function Strategy_Selection_Substep_Three_Check(form_array){
    };
    function Strategy_Selection_Substep_Four_Check(form_array){
    };
    
    function Strategy_Selection_Substep_One_Save(){
        // Populate saveArray
        saveArray = {
            strategySelectionNYSScore: strategySelectionArray.strategySelectionNYSScoreAnswer,
            strategySelectionCheckbox: strategySelectionArray.strategySelectionCheckboxAnswer,
            strategySelectionDocumentation: strategySelectionArray.strategySelectionDocumentationAnswer
            
        };
        if(strategySelectionArray.strategySelectionNYSScoreAnswer !== null){
            var addStep = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === "2.1"){
                    addStep = false;
                }
            }
            if(addStep === true){
                completedSteps.push("2.1");
            }
        }
        Save_Cookie(saveArray, "2.1", completedSteps);
    };
    function Strategy_Selection_Substep_Two_Save(){
        // Populate saveArray
        saveArray = {
            strategySelectionAbundanceAndDistributionCheckbox: strategySelectionArray.strategySelectionAbundanceAndDistributionCheckboxAnswer,
            strategySelectionAbundanceAndDistributionDocumentation: strategySelectionArray.strategySelectionAbundanceAndDistributionDocumentationAnswer
        };
        if(strategySelectionArray.strategySelectionAbundanceAndDistributionCheckboxAnswer !== null){
            var addStep = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === "2.2"){
                    addStep = false;
                }
            }
            if(addStep === true){
                completedSteps.push("2.2");
            }
        }
        Save_Cookie(saveArray, "2.2", completedSteps);
    };
    function Strategy_Selection_Substep_Three_Save(){
    };
    function Strategy_Selection_Substep_Four_Save(){
    };

    // Base following code on substep number
    function Strategy_Selection_Substep_One_Check_Boxes(boxName){
        $('#strategy_selection_ecological_impact').prop('checked', false);
        $('#strategy_selection_limited_distribution').prop('checked', false);
        $('#strategy_selection_widespread_distribution').prop('checked', false);
        $('#strategy_selection_negligible_impact').prop('checked', false);
        $('#strategy_selection_significant_harm').prop('checked', false);
        $(boxName).prop('checked', true);
        
        if($('#strategy_selection_ecological_impact').is(':checked')){
            strategySelectionArray.strategySelectionCheckboxAnswer = 'ecologicalImpact';
        }else if($('#strategy_selection_limited_distribution').is(':checked')){
            strategySelectionArray.strategySelectionCheckboxAnswer = 'limitedDistribution';
        }else if($('#strategy_selection_widespread_distribution').is(':checked')){
            strategySelectionArray.strategySelectionCheckboxAnswer = 'widespreadDistribution';
        }else if($('#strategy_selection_negligible_impact').is(':checked')){
            strategySelectionArray.strategySelectionCheckboxAnswer = 'negligibleImpact';
        }else if($('#strategy_selection_significant_harm').is(':checked')){
            strategySelectionArray.strategySelectionCheckboxAnswer = 'significantHarm';
        }
        Strategy_Selection_Substep_One_Check(strategySelectionArray);
    };
    function Strategy_Selection_Substep_Two_Check_Boxes(boxName){
        $('#strategy_selection_eradication_state_scale').prop('checked', false);
        $('#strategy_selection_containment_state_scale').prop('checked', false);
        $('#strategy_selection_eradication_project_scale').prop('checked', false);
        $('#strategy_selection_containment_project_scale').prop('checked', false);
        $('#strategy_selection_suppression').prop('checked', false);
        $(boxName).prop('checked', true);
        
        if($('#strategy_selection_eradication_state_scale').is(':checked')){
            strategySelectionArray.strategySelectionAbundanceAndDistributionCheckboxAnswer = 'eradicationStateScale';
        }else if($('#strategy_selection_containment_state_scale').is(':checked')){
            strategySelectionArray.strategySelectionAbundanceAndDistributionCheckboxAnswer = 'containmentStateScale';
        }else if($('#strategy_selection_eradication_project_scale').is(':checked')){
            strategySelectionArray.strategySelectionAbundanceAndDistributionCheckboxAnswer = 'eradicationProjectScale';
        }else if($('#strategy_selection_containment_state_scale').is(':checked')){
            strategySelectionArray.strategySelectionAbundanceAndDistributionCheckboxAnswer = 'containmentProjectScale';
        }else if($('#strategy_selection_suppression').is(':checked')){
            strategySelectionArray.strategySelectionAbundanceAndDistributionCheckboxAnswer = 'suppression';
        }
        Strategy_Selection_Substep_Two_Check(strategySelectionArray);
    };

    function Add_Event_To_Field(fieldLocation, substep){
        var tempHolder;
        $(fieldLocation).keyup(function(){
            if($(fieldLocation).prop('value') === ""){
                tempHolder = null;
            }else{
                tempHolder = $(fieldLocation).val();
            }
            if(fieldLocation === "#strategy_selection_NYS_score"){ strategySelectionArray.strategySelectionNYSScoreAnswer = tempHolder;
            }else if(fieldLocation === "#strategy_selection_documentation"){ strategySelectionArray.strategySelectionDocumentationAnswer = tempHolder;
            }else if(fieldLocation === "#strategy_selection_abundance_and_distribution_documentation"){ strategySelectionArray.strategySelectionAbundanceAndDistributionDocumentationAnswer = tempHolder; }

            if(substep === "1"){
                Strategy_Selection_Substep_One_Check(strategySelectionArray);
            }else if(substep === "2"){
                Strategy_Selection_Substep_Two_Check(strategySelectionArray);
            }else if(substep === "3"){
                Strategy_Selection_Substep_Three_Check(strategySelectionArray);
            }else if(substep === "4"){
                Strategy_Selection_Substep_Four_Check(strategySelectionArray);
            }
        });
    };
    if(currentStep === "2.1"){
        Strategy_Selection_Substep_One_Check(strategySelectionArray);
        Add_Event_To_Field("#strategy_selection_NYS_score", "1");
        Add_Event_To_Field("#strategy_selection_documentation", "1");
        // Checkbox Array
        $('#strategy_selection_ecological_impact').change(function(){ Strategy_Selection_Substep_One_Check_Boxes('#strategy_selection_ecological_impact'); });
        $('#strategy_selection_limited_distribution').change(function(){ Strategy_Selection_Substep_One_Check_Boxes('#strategy_selection_limited_distribution'); });
        $('#strategy_selection_widespread_distribution').change(function(){ Strategy_Selection_Substep_One_Check_Boxes('#strategy_selection_widespread_distribution'); });
        $('#strategy_selection_negligible_impact').change(function(){ Strategy_Selection_Substep_One_Check_Boxes('#strategy_selection_negligible_impact'); });
        $('#strategy_selection_significant_harm').change(function(){ Strategy_Selection_Substep_One_Check_Boxes('#strategy_selection_significant_harm'); });
    }else if(currentStep === "2.2"){
        Strategy_Selection_Substep_Two_Check(strategySelectionArray);
        Add_Event_To_Field("#strategy_selection_abundance_and_distribution_documentation", "2");
        // Checkbox Array
        $('#strategy_selection_eradication_state_scale').change(function(){ Strategy_Selection_Substep_Two_Check_Boxes('#strategy_selection_eradication_state_scale'); });
        $('#strategy_selection_containment_state_scale').change(function(){ Strategy_Selection_Substep_Two_Check_Boxes('#strategy_selection_containment_state_scale'); });
        $('#strategy_selection_eradication_project_scale').change(function(){ Strategy_Selection_Substep_Two_Check_Boxes('#strategy_selection_eradication_project_scale'); });
        $('#strategy_selection_containment_project_scale').change(function(){ Strategy_Selection_Substep_Two_Check_Boxes('#strategy_selection_containment_project_scale'); });
        $('#strategy_selection_suppression').change(function(){ Strategy_Selection_Substep_Two_Check_Boxes('#strategy_selection_suppression'); });
    }else if(currentStep === "2.3"){
        Strategy_Selection_Substep_Three_Check(strategySelectionArray);
    }else if(currentStep === "2.4"){
        Strategy_Selection_Substep_Four_Check(strategySelectionArray);
    }
    
    function Add_Event_To_Nav(destinationArray){
        $('#content_nav_forward').click(function(){
            if(destinationArray.forward !== "none"){
                if($('#content_nav_forward').hasClass('content_nav_base_active')){
                    if(destinationArray.current === "2.1"){ Strategy_Selection_Substep_One_Save();
                    }else if(destinationArray.current === "2.2"){ Strategy_Selection_Substep_Two_Save();
                    }else if(destinationArray.current === "2.3"){ Strategy_Selection_Substep_Three_Save();
                    }else if(destinationArray.current === "2.4"){ Strategy_Selection_Substep_Four_Save(); }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.forward);
                }
            }
        });
        $('#content_nav_back').click(function(){
            if(destinationArray.back !== "none"){
                if($('#content_nav_back').hasClass('content_nav_base_active')){
                    if(destinationArray.current === "2.1"){ Strategy_Selection_Substep_One_Save();
                    }else if(destinationArray.current === "2.2"){ Strategy_Selection_Substep_Two_Save();
                    }else if(destinationArray.current === "2.3"){ Strategy_Selection_Substep_Three_Save();
                    }else if(destinationArray.current === "2.4"){ Strategy_Selection_Substep_Four_Save(); }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.back);
                }
            }
        });
        $('#content_step_strategy_selection__substep_one').click(function(){
            if(destinationArray.substep_one !== "none"){
                if($('#content_step_strategy_selection_substep_one').hasClass('content_substep_available')){
                    if(destinationArray.current === "2.1"){ Strategy_Selection_Substep_One_Save();
                    }else if(destinationArray.current === "2.2"){ Strategy_Selection_Substep_Two_Save();
                    }else if(destinationArray.current === "2.3"){ Strategy_Selection_Substep_Three_Save();
                    }else if(destinationArray.current === "2.4"){ Strategy_Selection_Substep_Four_Save(); }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_one);
                }
            }
        });
        $('#content_step_strategy_selection_substep_two').click(function(){
            if(destinationArray.substep_two !== "none"){
                if($('#content_step_strategy_selection_substep_two').hasClass('content_substep_available')){
                    if(destinationArray.current === "2.1"){ Strategy_Selection_Substep_One_Save();
                    }else if(destinationArray.current === "2.2"){ Strategy_Selection_Substep_Two_Save();
                    }else if(destinationArray.current === "2.3"){ Strategy_Selection_Substep_Three_Save();
                    }else if(destinationArray.current === "2.4"){ Strategy_Selection_Substep_Four_Save(); }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_two);
                }
            }
        });
        $('#content_step_strategy_selection_substep_three').click(function(){
            if(destinationArray.substep_three !== "none"){
                if($('#content_step_strategy_selection_substep_three').hasClass('content_substep_available')){
                    if(destinationArray.current === "2.1"){ Strategy_Selection_Substep_One_Save();
                    }else if(destinationArray.current === "2.2"){ Strategy_Selection_Substep_Two_Save();
                    }else if(destinationArray.current === "2.3"){ Strategy_Selection_Substep_Three_Save();
                    }else if(destinationArray.current === "2.4"){ Strategy_Selection_Substep_Four_Save(); }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_three);
                }
            }
        });
        $('#content_step_strategy_selection_substep_four').click(function(){
            if(destinationArray.substep_four !== "none"){
                if($('#content_step_strategy_selection_substep_four').hasClass('content_substep_available')){
                    if(destinationArray.current === "2.1"){ Strategy_Selection_Substep_One_Save();
                    }else if(destinationArray.current === "2.2"){ Strategy_Selection_Substep_Two_Save();
                    }else if(destinationArray.current === "2.3"){ Strategy_Selection_Substep_Three_Save();
                    }else if(destinationArray.current === "2.4"){ Strategy_Selection_Substep_Four_Save(); }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_four);
                }
            }
        });
        $('#content_progress_bar_project_background').click(function(){
            if(destinationArray.projectBackground !== "none"){
                if($('#content_progress_bar_project_background').hasClass('progress_bar_available')){
                    if(destinationArray.current === "2.1"){ Strategy_Selection_Substep_One_Save();
                    }else if(destinationArray.current === "2.2"){ Strategy_Selection_Substep_Two_Save();
                    }else if(destinationArray.current === "2.3"){ Strategy_Selection_Substep_Three_Save();
                    }else if(destinationArray.current === "2.4"){ Strategy_Selection_Substep_Four_Save(); }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.projectBackground);
                }
            }
        });
        $('#content_progress_bar_strategy_selection').click(function(){
            if(destinationArray.strategySelection !== "none"){
                if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_available')){
                    if(destinationArray.current === "2.1"){ Strategy_Selection_Substep_One_Save();
                    }else if(destinationArray.current === "2.2"){ Strategy_Selection_Substep_Two_Save();
                    }else if(destinationArray.current === "2.3"){ Strategy_Selection_Substep_Three_Save();
                    }else if(destinationArray.current === "2.4"){ Strategy_Selection_Substep_Four_Save(); }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.strategySelection);
                }
            }
        });
    };

    // Assign Events to Nav Buttons
    if(currentStep === "2.1"){
        var destinationArray = {
            current: '2.1',
            forward: '2.2',
            back: '1.4',
            substep_one: 'none',
            substep_two: '2.2',
            substep_three: '2.3',
            substep_four: '2.4',
            projectBackground: '1.1',
            strategySelection: 'none'
        };
    }else if(currentStep === "2.2"){
        var destinationArray = {
            current: '2.2',
            forward: '2.3',
            back: '2.1',
            substep_one: '2.1',
            substep_two: 'none',
            substep_three: '2.3',
            substep_four: '2.4',
            projectBackground: '1.1',
            strategySelection: 'none'
        };
    }else if(currentStep === "2.3"){
        var destinationArray = {
            current: '2.3',
            forward: '2.4',
            back: '2.2',
            substep_one: '2.1',
            substep_two: '2.2',
            substep_three: 'none',
            substep_four: '2.4',
            projectBackground: '1.1',
            strategySelection: 'none'
        };
    }else if(currentStep === "2.4"){
        var destinationArray = {
            current: '2.4',
            forward: '3.1',
            back: '2.3',
            substep_one: '2.1',
            substep_two: '2.2',
            substep_three: '2.3',
            substep_four: 'none',
            projectBackground: '1.1',
            strategySelection: 'none'
        };
    }
    Add_Event_To_Nav(destinationArray);
};

/***********************************************\
 * Step(3) - Eradication                       *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Eradication(cookieData, completedSteps, currentStep){
};

/***********************************************\
 * Step(4) - Containment                       *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Containment(cookieData, completedSteps, currentStep){
};

/***********************************************\
 * Step(5) - Suppression                       *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Suppression(cookieData, completedSteps, currentStep){
};

/***********************************************\
 * Step(6) - Recommendation Summary            *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Recommendation_Summary(cookieData, completedSteps, currentStep){
};
