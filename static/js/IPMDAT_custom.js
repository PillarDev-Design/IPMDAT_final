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
    var name = "IPMDAT_cookie",
        savedData = $.JSONCookie(name),
        completedStepsLength = completedSteps.length,
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
            strategySelectionAbundanceAndDistributionDocumentation: null,
            strategySelectionAbundanceAndDistributionConfirm: null,
            strategySelectionAbundanceAndDistributionAlternative: null,
            strategySelectionAbundanceAndDistributionAlternativeDocumentation: null,
            // STRATEGY EXPLORATION (ERADICATION) (STEP 3)
            eradicationSocialPoliticalA: null,
            eradicationSocialPoliticalADocumentation: null,
            eradicationSocialPoliticalB: null,
            eradicationSocialPoliticalBDocumentation: null,
            eradicationSocialPoliticalC: null,
            eradicationSocialPoliticalCDocumentation: null,
            eradicationPreventingReproductionA: null,
            eradicationPreventingReproductionADocumentation: null,
            eradicationPreventingReproductionB: null,
            eradicationPreventingReproductionBDocumentation: null,
            eradicationDetection: null,
            eradicationDetectionDocumentation: null,
            eradicationEffectiveControlA: null,
            eradicationEffectiveControlADocumentation: null,
            eradicationEffectiveControlAControlMethod: null,
            eradicationEffectiveControlAControlMethodDescription: null,
            eradicationEffectiveControlB: null,
            eradicationEffectiveControlBDocumentation: null,
            eradicationNontargetImpacts: null,
            eradicationNontargetImpactsDocumentation: null,
            // STRATEGY EXPLORATION (CONTAINMENT) (STEP 4)
            containmentSocialPoliticalA: null,
            containmentSocialPoliticalADocumentation: null,
            containmentSocialPoliticalB: null,
            containmentSocialPoliticalBDocumentation: null,
            containmentPreventingReproductionA: null,
            containmentPreventingReproductionADocumentation: null,
            containmentPreventingReproductionB: null,
            containmentPreventingReproductionBDocumentation: null,
            containmentDetectingSmall: null,
            containmentDetectingSmallDocumentation: null,
            containmentEffectiveControlA: null,
            containmentEffectiveControlADocumentation: null,
            containmentEffectiveControlAControlMethod: null,
            containmentEffectiveControlAControlMethodDescription: null,
            containmentEffectiveControlB: null,
            containmentEffectiveControlBDocumentation: null,
            containmentNontargetImpacts: null,
            containmentNontargetImpactsDocumentation: null
        };
    /*===============================================================*\
     * This next chunk of code ensures that any previous data will   *
     * not be overwritten when we write to the cookie. It's          *
     * completely hardcoded, but it does the job. In the future I'll *
     * devise some way to optimize this.                             *
    \*===============================================================*/
    // Recall Saved Data from savedData
    // 1.1
    if(savedData.projectBackgroundAssessors !== null){ cookieArray.projectBackgroundAssessors = savedData.projectBackgroundAssessors; }
    if(savedData.projectBackgroundAssessorsDate !== null){ cookieArray.projectBackgroundAssessorsDate = savedData.projectBackgroundAssessorsDate; }
    if(savedData.projectBackgroundScientificName !== null){ cookieArray.projectBackgroundScientificName = savedData.projectBackgroundScientificName; }
    if(savedData.projectBackgroundCommonName !== null){ cookieArray.projectBackgroundCommonName = savedData.projectBackgroundCommonName; }
    if(savedData.projectBackgroundScale !== null){ cookieArray.projectBackgroundScale = savedData.projectBackgroundScale; }
    if(savedData.projectBackgroundPRISMWMA !== null){ cookieArray.projectBackgroundPRISMWMA = savedData.projectBackgroundPRISMWMA; }
    if(savedData.projectBackgroundConservationTargetImpacted !== null){ cookieArray.projectBackgroundConservationTargetImpacted = savedData.projectBackgroundConservationTargetImpacted; }
    if(savedData.projectBackgroundProjectAreaName !== null){ cookieArray.projectBackgroundProjectAreaName = savedData.projectBackgroundProjectAreaName; }
    if(savedData.projectBackgroundProjectAreaSize !== null){ cookieArray.projectBackgroundProjectAreaSize = savedData.projectBackgroundProjectAreaSize; }
    if(savedData.projectBackgroundPropertyOwners !== null){ cookieArray.projectBackgroundPropertyOwners = savedData.projectBackgroundPropertyOwners; }
    if(savedData.projectBackgroundProjectState !== null){ cookieArray.projectBackgroundProjectState = savedData.projectBackgroundProjectState; }
    if(savedData.projectBackgroundProjectCounty !== null){ cookieArray.projectBackgroundProjectCounty = savedData.projectBackgroundProjectCounty; }
    if(savedData.projectBackgroundProjectCoordX !== null){ cookieArray.projectBackgroundProjectCoordX = savedData.projectBackgroundProjectCoordX; }
    if(savedData.projectBackgroundProjectCoordY !== null){ cookieArray.projectBackgroundProjectCoordY = savedData.projectBackgroundProjectCoordY; }
    if(savedData.projectBackgroundProjectCoordSystem !== null){ cookieArray.projectBackgroundProjectCoordSystem = savedData.projectBackgroundProjectCoordSystem; }
    // 1.2
    if(savedData.projectBackgroundProjectGoal !== null){ cookieArray.projectBackgroundProjectGoal = savedData.projectBackgroundProjectGoal; }
    if(savedData.projectBackgroundNumberOfYearsToCompleted !== null){ cookieArray.projectBackgroundNumberOfYearsToComplete = savedData.projectBackgroundNumberOfYearsToComplete; }
    if(savedData.projectBackgroundStartDate !== null){ cookieArray.projectBackgroundStartDate = savedData.projectBackgroundStartDate; }
    if(savedData.projectBackgroundEndDate !== null){ cookieArray.projectBackgroundEndDate = savedData.projectBackgroundEndDate; }
    if(savedData.projectBackgroundOngoingProject !== null){ cookieArray.projectBackgroundOngoingProject = savedData.projectBackgroundOngoingProject; }
    if(savedData.projectBackgroundControlRequired !== null){ cookieArray.projectBackgroundControlRequired = savedData.projectBackgroundControlRequired; }
    // 1.3
    if(savedData.projectBackgroundGrossInvadedArea !== null){ cookieArray.projectBackgroundGrossInvadedArea = savedData.projectBackgroundGrossInvadedArea; }
    if(savedData.projectBackgroundNetInvadedArea !== null){ cookieArray.projectBackgroundNetInvadedArea = savedData.projectBackgroundNetInvadedArea; }
    if(savedData.projectBackgroundNumberOfOccurances !== null){ cookieArray.projectBackgroundNumberOfOccurances = savedData.projectBackgroundNumberOfOccurances; }
    // 1.4
    if(savedData.projectBackgroundImapShareResults !== null){ cookieArray.projectBackgroundImapShareResults = savedData.projectBackgroundImapShareResults; }
    if(savedData.projectBackgroundImapAccount !== null){ cookieArray.projectBackgroundImapAccount = savedData.projectBackgroundImapAccount; }
    // 2.1
    if(savedData.strategySelectionNYSScore !== null){ cookieArray.strategySelectionNYSScore = savedData.strategySelectionNYSScore; }
    if(savedData.strategySelectionCheckbox !== null){ cookieArray.strategySelectionCheckbox = savedData.strategySelectionCheckbox; }
    if(savedData.strategySelectionDocumentation !== null){ cookieArray.strategySelectionDocumentation = savedData.strategySelectionDocumentation; }
    // 2.2
    if(savedData.strategySelectionAbundanceAndDistributionCheckbox !== null){ cookieArray.strategySelectionAbundanceAndDistributionCheckbox = savedData.strategySelectionAbundanceAndDistributionCheckbox; }
    if(savedData.strategySelectionAbundanceAndDistributionDocumentation !== null){ cookieArray.strategySelectionAbundanceAndDistributionDocumentation = savedData.strategySelectionAbundanceAndDistributionDocumentation; }
    // 2.3
    if(savedData.strategySelectionAbundanceAndDistributionConfirm !== null){ cookieArray.strategySelectionAbundanceAndDistributionConfirm = savedData.strategySelectionAbundanceAndDistributionConfirm; }
    // 2.4
    if(savedData.strategySelectionAbundanceAndDistributionAlternative !== null){ cookieArray.strategySelectionAbundanceAndDistributionAlternative = savedData.strategySelectionAbundanceAndDistributionAlternative; }
    if(savedData.strategySelectionAbundanceAndDistributionAlternativeDocumentation !== null){ cookieArray.strategySelectionAbundanceAndDistributionAlternativeDocumentation = savedData.strategySelectionAbundanceAndDistributionAlternativeDocumentation; }
    // 3.1
    if(savedData.eradicationSocialPoliticalA !== null){ cookieArray.eradicationSocialPoliticalA = savedData.eradicationSocialPoliticalA; }
    if(savedData.eradicationSocialPoliticalADocumentation !== null){ cookieArray.eradicationSocialPoliticalADocumentation = savedData.eradicationSocialPoliticalADocumentation; }
    // 3.2
    if(savedData.eradicationSocialPoliticalB !== null){ cookieArray.eradicationSocialPoliticalB = savedData.eradicationSocialPoliticalB; }
    if(savedData.eradicationSocialPoliticalBDocumentation !== null){ cookieArray.eradicationSocialPoliticalBDocumentation = savedData.eradicationSocialPoliticalBDocumentation; }
    // 3.3
    if(savedData.eradicationSocialPoliticalC !== null){ cookieArray.eradicationSocialPoliticalC = savedData.eradicationSocialPoliticalC; }
    if(savedData.eradicationSocialPoliticalCDocumentation !== null){ cookieArray.eradicationSocialPoliticalCDocumentation = savedData.eradicationSocialPoliticalCDocumentation; }
    // 3.4
    if(savedData.eradicationPreventingReproductionA !== null){ cookieArray.eradicationPreventingReproductionA = savedData.eradicationPreventingReproductionA; }
    if(savedData.eradicationPreventingReproductionADocumentation !== null){ cookieArray.eradicationPreventingReproductionADocumentation = savedData.eradicationPreventingReproductionADocumentation; }
    // 3.5
    if(savedData.eradicationPreventingReproductionB !== null){ cookieArray.eradicationPreventingReproductionB = savedData.eradicationPreventingReproductionB; }
    if(savedData.eradicationPreventingReproductionBDocumentation !== null){ cookieArray.eradicationPreventingReproductionBDocumentation = savedData.eradicationPreventingReproductionBDocumentation; }
    // 3.6
    if(savedData.eradicationDetection !== null){ cookieArray.eradicationDetection = savedData.eradicationDetection; }
    if(savedData.eradicationDetectionDocumentation !== null){ cookieArray.eradicationDetectionDocumentation = savedData.eradicationDetectionDocumentation; }
    // 3.7
    if(savedData.eradicationEffectiveControlA !== null){ cookieArray.eradicationEffectiveControlA = savedData.eradicationEffectiveControlA; }
    if(savedData.eradicationEffectiveControlADocumentation !== null){ cookieArray.eradicationEffectiveControlADocumentation = savedData.eradicationEffectiveControlADocumentation; }
    if(savedData.eradicationEffectiveControlAControlMethod !== null){ cookieArray.eradicationEffectiveControlAControlMethod = savedData.eradicationEffectiveControlAControlMethod; }
    if(savedData.eradicationEffectiveControlAControlMethodDescription !== null){ cookieArray.eradicationEffectiveControlAControlMethodDescription = savedData.eradicationEffectiveControlAControlMethodDescription; }
    // 3.8
    if(savedData.eradicationEffectiveControlB !== null){ cookieArray.eradicationEffectiveControlB = savedData.eradicationEffectiveControlB; }
    if(savedData.eradicationEffectiveControlBDocumentation !== null){ cookieArray.eradicationEffectiveControlBDocumentation = savedData.eradicationEffectiveControlBDocumentation; }
    // 3.9
    if(savedData.eradicationNontargetImpacts !== null){ cookieArray.eradicationNontargetImpacts = savedData.eradicationNontargetImpacts; }
    if(savedData.eradicationNontargetImpactsDocumentation !== null){ cookieArray.eradicationNontargetImpactsDocumentation = savedData.eradicationNontargetImpactsDocumentation; }
    // 4.1
    // 4.2
    // 4.3
    // 4.4
    // 4.5
    // 4.6
    // 4.7
    // 4.8

    // Enter New Data from cookieData
    if(stepNumber === "1.1"){
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
    }else if(stepNumber === "1.2"){
        cookieArray.projectBackgroundProjectGoal = cookieData.projectBackgroundProjectGoal;
        cookieArray.projectBackgroundNumberOfYearsToComplete = cookieData.projectBackgroundNumberOfYearsToComplete;
        cookieArray.projectBackgroundStartDate = cookieData.projectBackgroundStartDate;
        cookieArray.projectBackgroundEndDate = cookieData.projectBackgroundEndDate;
        cookieArray.projectBackgroundOngoingProject = cookieData.projectBackgroundOngoingProject;
        cookieArray.projectBackgroundControlRequired = cookieData.projectBackgroundControlRequired;
    }else if(stepNumber === "1.3"){
        cookieArray.projectBackgroundGrossInvadedArea = cookieData.projectBackgroundGrossInvadedArea;
        cookieArray.projectBackgroundNetInvadedArea = cookieData.projectBackgroundNetInvadedArea;
        cookieArray.projectBackgroundNumberOfOccurances = cookieData.projectBackgroundNumberOfOccurances;
    }else if(stepNumber === "1.4"){
        cookieArray.projectBackgroundImapShareResults = cookieData.projectBackgroundImapShareResults;
        cookieArray.projectBackgroundImapAccount = cookieData.projectBackgroundImapAccount;
    }else if(stepNumber === "2.1"){
        cookieArray.strategySelectionNYSScore = cookieData.strategySelectionNYSScore;
        cookieArray.strategySelectionCheckbox = cookieData.strategySelectionCheckbox;
        cookieArray.strategySelectionDocumentation = cookieData.strategySelectionDocumentation;
    }else if(stepNumber === "2.2"){
        cookieArray.strategySelectionAbundanceAndDistributionCheckbox = cookieData.strategySelectionAbundanceAndDistributionCheckbox;
        cookieArray.strategySelectionAbundanceAndDistributionDocumentation = cookieData.strategySelectionAbundanceAndDistributionDocumentation;
    }else if(stepNumber === "2.3"){
        cookieArray.strategySelectionAbundanceAndDistributionConfirm = cookieData.strategySelectionAbundanceAndDistributionConfirm;
    }else if(stepNumber === "2.4"){
        cookieArray.strategySelectionAbundanceAndDistributionAlternative = cookieData.strategySelectionAbundanceAndDistributionAlternative;
        cookieArray.strategySelectionAbundanceAndDistributionAlternativeDocumentation = cookieData.strategySelectionAbundanceAndDistributionAlternativeDocumentation;
    }else if(stepNumber === "3.1"){
        cookieArray.eradicationSocialPoliticalA = cookieData.eradicationSocialPoliticalA;
        cookieArray.eradicationSocialPoliticalADocumentation = cookieData.eradicationSocialPoliticalADocumentation;
    }else if(stepNumber === "3.2"){
        cookieArray.eradicationSocialPoliticalB = cookieData.eradicationSocialPoliticalB;
        cookieArray.eradicationSocialPoliticalBDocumentation = cookieData.eradicationSocialPoliticalBDocumentation;
    }else if(stepNumber === "3.3"){
        cookieArray.eradicationSocialPoliticalC = cookieData.eradicationSocialPoliticalC;
        cookieArray.eradicationSocialPoliticalCDocumentation = cookieData.eradicationSocialPoliticalCDocumentation;
    }else if(stepNumber === "3.4"){
        cookieArray.eradicationPreventingReproductionA = cookieData.eradicationPreventingReproductionA;
        cookieArray.eradicationPreventingReproductionADocumentation = cookieData.eradicationPreventingReproductionADocumentation;
    }else if(stepNumber === "3.5"){
        cookieArray.eradicationPreventingReproductionB = cookieData.eradicationPreventingReproductionB;
        cookieArray.eradicationPreventingReproductionBDocumentation = cookieData.eradicationPreventingReproductionBDocumentation;
    }else if(stepNumber === "3.6"){
        cookieArray.eradicationDetection = cookieData.eradicationDetection;
        cookieArray.eradicationDetectionDocumentation = cookieData.eradicationDetectionDocumentation;
    }else if(stepNumber === "3.7"){
        cookieArray.eradicationEffectiveControlA = cookieData.eradicationEffectiveControlA;
        cookieArray.eradicationEffectiveControlADocumentation = cookieData.eradicationEffectiveControlADocumentation;
        cookieArray.eradicationEffectiveControlAControlMethod = cookieData.eradicationEffectiveControlAControlMethod;
        cookieArray.eradicationEffectiveControlAControlMethodDescription = cookieData.eradicationEffectiveControlAControlMethodDescription;
    }else if(stepNumber === "3.8"){
        cookieArray.eradicationEffectiveControlB = cookieData.eradicationEffectiveControlB;
        cookieArray.eradicationEffectiveControlBDocumentation = cookieData.eradicationEffectiveControlBDocumentation;
    }else if(stepNumber === "3.9"){
        cookieArray.eradicationNontargetImpacts = cookieData.eradicationNontargetImpacts;
        cookieArray.eradicationNontargetImpactsDocumentation = cookieData.eradicationNontargetImpactsDocumentation;
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
    var name = "IPMDAT_cookie",
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
    $('#content_progress_bar_strategy_selection').unbind('click');
    $('#content_step_strategy_selection_substep_one').unbind('click');
    $('#content_step_strategy_selection_substep_two').unbind('click');
    $('#content_step_strategy_selection_substep_three').unbind('click');
    $('#content_step_strategy_selection_substep_four').unbind('click');
    $('#content_progress_bar_strategy_exploration').unbind('click');
    $('#content_step_strategy_exploration_eradication_substep_one').unbind('click');
    $('#content_step_strategy_exploration_eradication_substep_two').unbind('click');
    $('#content_step_strategy_exploration_eradication_substep_three').unbind('click');
    $('#content_step_strategy_exploration_eradication_substep_four').unbind('click');
    $('#content_step_strategy_exploration_eradication_substep_five').unbind('click');
    $('#content_step_strategy_exploration_eradication_substep_six').unbind('click');
    $('#content_step_strategy_exploration_eradication_substep_seven').unbind('click');
    $('#content_step_strategy_exploration_eradication_substep_eight').unbind('click');
    $('#content_step_strategy_exploration_eradication_substep_nine').unbind('click');
    // TODO: UPDATE HERE
    
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
            $('#content_step_project_background_substep_two').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "1.2"){
            $('#content_step_project_background_substep_three').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "1.3"){
            $('#content_step_project_background_substep_four').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "1.4"){
            $('#content_progress_bar_strategy_selection').removeClass('progress_bar_active').removeClass('progress_bar_inactive').addClass('progress_bar_available');
            $('#content_step_strategy_selection_substep_one').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "2.1"){
            $('#content_step_strategy_selection_substep_two').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "2.2"){
            $('#content_step_strategy_selection_substep_three').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "2.3"){
            // If Step 2.3 is completed, we must disable the radio buttons
            // because the decision is permenant.
            $('#strategy_confirmation_yes').prop('disabled', false);
            $('#strategy_confirmation_no').prop('disabled', false);
            if(cookieData.strategySelectionAbundanceAndDistributionConfirm === "yes"){
                // Confirm
                $('#content_progress_bar_strategy_exploration').removeClass('progress_bar_active').removeClass('progress_bar_inactive').addClass('progress_bar_available');
                $('#content_step_strategy_exploration_eradication_substep_one').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
            }else{
                // Alternative
                $('#content_step_strategy_selection_substep_four').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
            }
            $('#strategy_confirmation_yes').prop('disabled', true);
            $('#strategy_confirmation_no').prop('disabled', true);
        }
        if(completedSteps[i] === "2.4"){
            $('#content_progress_bar_strategy_exploration').removeClass('progress_bar_active').removeClass('progress_bar_inactive').addClass('progress_bar_available');
            $('#content_step_strategy_exploration_eradication_substep_one').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "3.1"){
            $('#content_step_strategy_exploration_eradication_substep_two').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "3.2"){
            $('#content_step_strategy_exploration_eradication_substep_three').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "3.3"){
            $('#content_step_strategy_exploration_eradication_substep_four').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "3.4"){
            $('#content_step_strategy_exploration_eradication_substep_five').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "3.5"){
            $('#content_step_strategy_exploration_eradication_substep_six').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "3.6"){
            $('#content_step_strategy_exploration_eradication_substep_seven').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "3.7"){
            $('#content_step_strategy_exploration_eradication_substep_eight').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "3.8"){
            $('#content_step_strategy_exploration_eradication_substep_nine').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "3.9"){
            // TODO: UPDATE HERE (TO BE DETERMINED)
        }
    }

    // Clear All Step Containers
    // PROJECT BACKGROUND
    if($('#content_step_project_background_container').hasClass('content_step_active')){
        $('#content_step_project_background_container').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_project_timeframe_container').hasClass('content_step_active')){
        $('#content_step_project_timeframe_container').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_distribution_and_abundance_container').hasClass('content_step_active')){
        $('#content_step_distribution_and_abundance_container').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_imapinvasives_container').hasClass('content_step_active')){
        $('#content_step_imapinvasives_container').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_substep_project_background_container').hasClass('content_substep_container_active')){
        $('#content_substep_project_background_container').removeClass('content_substep_container_active').addClass('content_substep_container_inactive');
    }
    // STRATEGY SELECTION
    if($('#content_step_strategy_selection_container').hasClass('content_step_active')){
        $('#content_step_strategy_selection_container').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_abundance_and_distribution_container').hasClass('content_step_active')){
        $('#content_step_abundance_and_distribution_container').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_confirmation_container').hasClass('content_step_active')){
        $('#content_step_strategy_confirmation_container').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_alternative_container').hasClass('content_step_active')){
        $('#content_step_strategy_alternative_container').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_substep_strategy_selection_container').hasClass('content_substep_container_active')){
        $('#content_substep_strategy_selection_container').removeClass('content_substep_container_active').addClass('content_substep_container_inactive');
    }
    // STRATEGY EXPLORATION (ERADICATION)
    if($('#content_step_strategy_exploration_eradication_SocialPoliticalA').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_eradication_SocialPoliticalA').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_exploration_eradication_SocialPoliticalB').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_eradication_SocialPoliticalB').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_exploration_eradication_SocialPoliticalC').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_eradication_SocialPoliticalC').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_exploration_eradication_PreventingReproductionA').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_eradication_PreventingReproductionA').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_exploration_eradication_PreventingReproductionB').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_eradication_PreventingReproductionB').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_exploration_eradication_Detection').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_eradication_Detection').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_exploration_eradication_EffectiveControlA').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_eradication_EffectiveControlA').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_exploration_eradication_EffectiveControlB').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_eradication_EffectiveControlB').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_exploration_eradication_NontargetImpacts').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_eradication_NontargetImpacts').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_substep_strategy_exploration_eradication_container').hasClass('content_substep_container_active')){
        $('#content_substep_strategy_exploration_eradication_container').removeClass('content_substep_container_active').addClass('content_substep_container_inactive');
    }
    // STRATEGY EXPLORATION
    if($('#content_step_strategy_exploration_container').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_container').removeClass('content_step_active').addClass('content_step_inactive');
    }
    // SUMMARY RECOMMENDATION
    if($('#content_step_summary_recommendation_container').hasClass('content_step_active')){
        $('#content_step_summary_recommendation_container').removeClass('content_step_active').addClass('content_step_inactive');
    }
    // TODO: UPDATE HERE

    // Fire Correct Step
    // Also - we need to clear the fields in preparation for input of fields.
    // This needs to be done even if the step is completed. The user could have
    //      backed a step (only partially completed). The fields that are
    //      completed will be automatically filled on step function fired.
    if((currentStep === "1.1")||(currentStep === "1.2")||(currentStep === "1.3")||(currentStep === "1.4")){
        // Main Progress Bars
        $('#content_progress_bar_project_background').removeClass('progress_bar_inactive').removeClass('progress_bar_available').addClass('progress_bar_active');
        // Substep Progress Container
        $('#content_substep_project_background_container').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');

        // SubStep Progress Bars & Clear Questions
        if(currentStep === "1.1"){
            // SubStep Progress Bar
            $('#content_step_project_background_substep_one').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
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
        }else if(currentStep === "1.2"){
            // SubStep Progress Bar
            $('#content_step_project_background_substep_two').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
            // Clear Questions
            $('#project_background_project_goal').prop('value', "");
            $('#project_background_number_of_years_to_complete').prop('value', "");
            $('#project_background_start_date').prop('value', "");
            $('#project_background_end_date').prop('value', "");
            $('#project_background_ongoing_project').prop('value', "");
            $('#project_background_control_required').prop('value', "");
        }else if(currentStep === "1.3"){
            // SubStep Progress Bar
            $('#content_step_project_background_substep_three').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
            // Clear Questions
            $('#project_background_gross_invaded_area').prop('value', "");
            $('#project_background_net_invaded_area').prop('value', "");
            $('#project_background_number_of_occurances').prop('value', "");
        }else if(currentStep === "1.4"){
            // SubStep Progress Bar
            $('#content_step_project_background_substep_four').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
            // Clear Questions
            $('#project_background_imap_share_results').prop('value', "");
            $('#project_background_imap_account').prop('value', "");
        }
        // Execute Step Function
        JSON_Cookie_Step_Project_Background(cookieData, completedSteps, currentStep);
    }else if((currentStep === "2.1")||(currentStep === "2.2")||(currentStep === "2.3")||(currentStep === "2.4")){
        // Main Progress Bars
        $('#content_progress_bar_strategy_selection').removeClass('progress_bar_inactive').removeClass('progress_bar_available').addClass('progress_bar_active');
        // Substep Progress Container
        $('#content_substep_strategy_selection_container').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
        
        // SubStep Progress Bars & Clear Questions
        if(currentStep === "2.1"){
            // SubStep Progress Bar
            $('#content_step_strategy_selection_substep_one').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
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
            $('#content_step_strategy_selection_substep_two').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
            // Clear Questions
            $('#strategy_selection_eradication_state_scale').prop('checked', false);
            $('#strategy_selection_containment_state_scale').prop('checked', false);
            $('#strategy_selection_eradication_project_scale').prop('checked', false);
            $('#strategy_selection_containment_project_scale').prop('checked', false);
            $('#strategy_selection_suppression').prop('checked', false);
            $('#strategy_selection_abundance_and_distribution_documentation').prop('value', "");
        }else if(currentStep === "2.3"){
            // SubStep Progress Bar
            $('#content_step_strategy_selection_substep_three').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
            // Clear Questions
            $('#strategy_confirmation_yes').prop('checked', false);
            $('#strategy_confirmation_no').prop('checked', false);
        }else if(currentStep === "2.4"){
            // SubStep Progress Bar
            $('#content_step_strategy_selection_substep_four').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
            // Clear Questions
            $('#strategy_selection_alternative_eradication').prop('checked', false);
            $('#strategy_selection_alternative_containment').prop('checked', false);
            $('#strategy_selection_alternative_suppression').prop('checked', false);
            $('#strategy_selection_alternative_documentation').prop('value', "");
        }
        // Execute Step Function
        JSON_Cookie_Step_Strategy_Selection(cookieData, completedSteps, currentStep);
    }else if((currentStep === "3.1")||(currentStep === "3.2")||(currentStep === "3.3")||(currentStep === "3.4")||(currentStep === "3.5")||(currentStep ==="3.6")||(currentStep === "3.7")||(currentStep === "3.8")||(currentStep === "3.9")){
        // Main Progress Bars
        $('#content_progress_bar_strategy_exploration').removeClass('progress_bar_inactive').removeClass('progress_bar_available').addClass('progress_bar_active');
        // Substep Progress Container
        $('#content_substep_strategy_exploration_eradication_container').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
        
        // SubStep Progress Bars & Clear Questions
        if(currentStep === "3.1"){
            // Substep Progress Bar
            $('#content_step_strategy_exploration_eradication_substep_one').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
            // Clear Questions
            $('#eradication_SocialPoliticalA_yes').prop('checked', false);
            $('#eradication_SocialPoliticalA_no').prop('checked', false);
            $('#eradication_SocialPoliticalA_uncertain').prop('checked', false);
            $('#eradication_SocialPoliticalA_documentation').prop('value', "");
        }else if(currentStep === "3.2"){
            // Substep Progress Bar
            $('#content_step_strategy_exploration_eradication_substep_two').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
            // Clear Questions
            $('#eradication_SocialPoliticalB_yes').prop('checked', false);
            $('#eradication_SocialPoliticalB_no').prop('checked', false);
            $('#eradication_SocialPoliticalB_uncertain').prop('checked', false);
            $('#eradication_SocialPoliticalB_documentation').prop('value', "");
        }else if(currentStep === "3.3"){
            // Substep Progress Bar
            $('#content_step_strategy_exploration_eradication_substep_three').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
            // Clear Questions
            $('#eradication_SocialPoliticalC_yes').prop('checked', false);
            $('#eradication_SocialPoliticalC_no').prop('checked', false);
            $('#eradication_SocialPoliticalC_uncertain').prop('checked', false);
            $('#eradication_SocialPoliticalC_documentation').prop('value', "");
        }else if(currentStep === "3.4"){
            // Substep Progress Bar
            $('#content_step_strategy_exploration_eradication_substep_four').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
            // Clear Questions
            $('#eradication_PreventingReproductionA_yes').prop('checked', false);
            $('#eradication_PreventingReproductionA_no').prop('checked', false);
            $('#eradication_PreventingReproductionA_uncertain').prop('checked', false);
            $('#eradication_PreventingReproductionA_documentation').prop('value', "");
        }else if(currentStep === "3.5"){
            // Substep Progress Bar
            $('#content_step_strategy_exploration_eradication_substep_five').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
            // Clear Questions
            $('#eradication_PreventingReproductionB_yes').prop('checked', false);
            $('#eradication_PreventingReproductionB_no').prop('checked', false);
            $('#eradication_PreventingReproductionB_uncertain').prop('checked', false);
            $('#eradication_PreventingReproductionB_documentation').prop('value', "");
        }else if(currentStep === "3.6"){
            // Substep Progress Bar
            $('#content_step_strategy_exploration_eradication_substep_six').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
            // Clear Questions
            $('#eradication_Detection_yes').prop('checked', false);
            $('#eradication_Detection_no').prop('checked', false);
            $('#eradication_Detection_uncertain').prop('checked', false);
            $('#eradication_Detection_documentation').prop('value', "");
        }else if(currentStep === "3.7"){
            // Substep Progress Bar
            $('#content_step_strategy_exploration_eradication_substep_seven').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
            // Clear Questions
            $('#eradication__yes').prop('checked', false);
            $('#eradication__no').prop('checked', false);
            $('#eradication__uncertain').prop('checked', false);
            $('#eradication__documentation').prop('value', "");
        }else if(currentStep === "3.8"){
            // Substep Progress Bar
            if($('#content_step_strategy_exploration_eradication_substep_eight').hasClass('content_substep_inactive')){
                $('#content_step_strategy_exploration_eradication_substep_eight').removeClass('content_substep_inactive');
            }
            if($('#content_step_strategy_exploration_eradication_substep_eight').hasClass('content_substep_available')){
                $('#content_step_strategy_exploration_eradication_substep_eight').removeClass('content_substep_available');
            }
            if($('#content_step_strategy_exploration_eradication_substep_eight').hasClass('content_substep_active')){}else{
                $('#content_step_strategy_exploration_eradication_substep_eight').addClass('content_substep_active');
            }
            // Clear Questions
            // TODO: UPDATE HERE
        }else if(currentStep === "3.9"){
            // Substep Progress Bar
            if($('#content_step_strategy_exploration_eradication_substep_nine').hasClass('content_substep_inactive')){
                $('#content_step_strategy_exploration_eradication_substep_nine').removeClass('content_substep_inactive');
            }
            if($('#content_step_strategy_exploration_eradication_substep_nine').hasClass('content_substep_available')){
                $('#content_step_strategy_exploration_eradication_substep_nine').removeClass('content_substep_available');
            }
            if($('#content_step_strategy_exploration_eradication_substep_nine').hasClass('content_substep_active')){}else{
                $('#content_step_strategy_exploration_eradication_substep_nine').addClass('content_substep_active');
            }
            // Clear Questions
            // TODO: UPDATE HERE
        }
        // Execute Step Function
        JSON_Cookie_Step_Strategy_Exploration_Eradication(cookieData, completedSteps, currentStep);
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
            strategySelectionAbundanceAndDistributionDocumentation: null,
            strategySelectionAbundanceAndDistributionConfirm: null,
            strategySelectionAbundanceAndDistributionAlternative: null,
            strategySelectionAbundanceAndDistributionAlternativeDocumentation: null,
            // STRATEGY EXPLORATION (ERADICATION) (STEP 3)
            eradicationSocialPoliticalA: null,
            eradicationSocialPoliticalADocumentation: null,
            eradicationSocialPoliticalB: null,
            eradicationSocialPoliticalBDocumentation: null,
            eradicationSocialPoliticalC: null,
            eradicationSocialPoliticalCDocumentation: null,
            eradicationPreventingReproductionA: null,
            eradicationPreventingReproductionADocumentation: null,
            eradicationPreventingReproductionB: null,
            eradicationPreventingReproductionBDocumentation: null,
            eradicationDetection: null,
            eradicationDetectionDocumentation: null,
            eradicationEffectiveControlA: null,
            eradicationEffectiveControlADocumentation: null,
            eradicationEffectiveControlAControlMethod: null,
            eradicationEffectiveControlAControlMethodDescription: null,
            eradicationEffectiveControlB: null,
            eradicationEffectiveControlBDocumentation: null,
            eradicationNontargetImpacts: null,
            eradicationNontargetImpactsDocumentation: null,
            // STRATEGY EXPLORATION (CONTAINMENT) (STEP 4)
            containmentSocialPoliticalA: null,
            containmentSocialPoliticalADocumentation: null,
            containmentSocialPoliticalB: null,
            containmentSocialPoliticalBDocumentation: null,
            containmentPreventingReproductionA: null,
            containmentPreventingReproductionADocumentation: null,
            containmentPreventingReproductionB: null,
            containmentPreventingReproductionBDocumentation: null,
            containmentDetectingSmall: null,
            containmentDetectingSmallDocumentation: null,
            containmentEffectiveControlA: null,
            containmentEffectiveControlADocumentation: null,
            containmentEffectiveControlAControlMethod: null,
            containmentEffectiveControlAControlMethodDescription: null,
            containmentEffectiveControlB: null,
            containmentEffectiveControlBDocumentation: null,
            containmentNontargetImpacts: null,
            containmentNontargetImpactsDocumentation: null
        },
        completedSteps = [],
        currentStep = "1.1",
        name = "IPMDAT_cookie",
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
            strategySelectionAbundanceAndDistributionDocumentation: null,
            strategySelectionAbundanceAndDistributionConfirm: null,
            strategySelectionAbundanceAndDistributionAlternative: null,
            strategySelectionAbundanceAndDistributionAlternativeDocumentation: null,
            // STRATEGY EXPLORATION (ERADICATION) (STEP 3)
            eradicationSocialPoliticalA: null,
            eradicationSocialPoliticalADocumentation: null,
            eradicationSocialPoliticalB: null,
            eradicationSocialPoliticalBDocumentation: null,
            eradicationSocialPoliticalC: null,
            eradicationSocialPoliticalCDocumentation: null,
            eradicationPreventingReproductionA: null,
            eradicationPreventingReproductionADocumentation: null,
            eradicationPreventingReproductionB: null,
            eradicationPreventingReproductionBDocumentation: null,
            eradicationDetection: null,
            eradicationDetectionDocumentation: null,
            eradicationEffectiveControlA: null,
            eradicationEffectiveControlADocumentation: null,
            eradicationEffectiveControlAControlMethod: null,
            eradicationEffectiveControlAControlMethodDescription: null,
            eradicationEffectiveControlB: null,
            eradicationEffectiveControlBDocumentation: null,
            eradicationNontargetImpacts: null,
            eradicationNontargetImpactsDocumentation: null,
            // STRATEGY EXPLORATION (CONTAINMENT) (STEP 4)
            containmentSocialPoliticalA: null,
            containmentSocialPoliticalADocumentation: null,
            containmentSocialPoliticalB: null,
            containmentSocialPoliticalBDocumentation: null,
            containmentPreventingReproductionA: null,
            containmentPreventingReproductionADocumentation: null,
            containmentPreventingReproductionB: null,
            containmentPreventingReproductionBDocumentation: null,
            containmentDetectingSmall: null,
            containmentDetectingSmallDocumentation: null,
            containmentEffectiveControlA: null,
            containmentEffectiveControlADocumentation: null,
            containmentEffectiveControlAControlMethod: null,
            containmentEffectiveControlAControlMethodDescription: null,
            containmentEffectiveControlB: null,
            containmentEffectiveControlBDocumentation: null,
            containmentNontargetImpacts: null,
            containmentNontargetImpactsDocumentation: null
        };
        $.JSONCookie(name, cookieData, {path: '/'});
    });
    
    // Check For Previous Data
    // TODO: UPDATE HERE
    var savedData = $.JSONCookie(name),
        stepFail = false;
    
    //------------------------------------------------------------------------\\
    // The following section checks for the required field on each step and   \\
    // determines if the step is completed or not.                            \\
    //------------------------------------------------------------------------\\

    //------------------------------------------------------------------------\\
    // Project Background                                                     \\
    //------------------------------------------------------------------------\\
    // *** 1.1 ***
    //projectBackgroundAssessors
    if(savedData.projectBackgroundAssessors !== null){
        cookieData.projectBackgroundAssessors = savedData.projectBackgroundAssessors;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("1.1");
    }
    stepFail = false;

    // *** 1.2 ***
    //projectBackgroundProjectGoal
    if(savedData.projectBackgroundProjectGoal !== null){
        cookieData.projectBackgroundProjectGoal = savedData.projectBackgroundProjectGoal;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("1.2");
    }
    stepFail = false;

    // *** 1.3 ***
    //projectBackgroundGrossInvadedArea
    if(savedData.projectBackgroundGrossInvadedArea !== null){
        cookieData.projectBackgroundGrossInvadedArea = savedData.projectBackgroundGrossInvadedArea;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("1.3");
    }
    stepFail = false;

    // *** 1.4 ***
    //projectBackgroundImapShareResults
    if(savedData.projectBackgroundImapShareResults !== null){
        cookieData.projectBackgroundImapShareResults = savedData.projectBackgroundImapShareResults;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("1.4");
    }
    stepFail = false;
    
    //------------------------------------------------------------------------\\
    // Strategy Selection                                                     \\
    //------------------------------------------------------------------------\\
    // *** 2.1 ***
    //strategySelectionNYSScore
    if(savedData.strategySelectionNYSScore !== null){
        cookieData.strategySelectionNYSScore = savedData.strategySelectionNYSScore;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("2.1");
    }
    stepFail = false;

    // *** 2.2 ***
    if(savedData.strategySelectionAbundanceAndDistributionCheckbox !== null){
        cookieData.strategySelectionAbundanceAndDistributionCheckbox = savedData.strategySelectionAbundanceAndDistributionCheckbox;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("2.2");
    }
    stepFail = false;
    
    // *** 2.3 ***
    if(savedData.strategySelectionAbundanceAndDistributionConfirm !== null){
        cookieData.strategySelectionAbundanceAndDistributionConfirm = savedData.strategySelectionAbundanceAndDistributionConfirm;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("2.3");
    }
    stepFail = false;
    
    // *** 2.4 ***
    if(savedData.strategySelectionAbundanceAndDistributionAlternative !== null){
        cookieData.strategySelectionAbundanceAndDistributionAlternative = savedData.strategySelectionAbundanceAndDistributionAlternative;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("2.4");
    }
    stepFail = false;
    
    //------------------------------------------------------------------------\\
    // Strategy Selection                                                     \\
    //------------------------------------------------------------------------\\
    // *** 3.1 ***
    if(savedData.eradicationSocialPoliticalA !== null){
        cookieData.eradicationSocialPoliticalA = savedData.eradicationSocialPoliticalA;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.1");
    }
    stepFail = false;

    // *** 3.2 ***
    if(savedData.eradicationSocialPoliticalB !== null){
        cookieData.eradicationSocialPoliticalB = savedData.eradicationSocialPoliticalB;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.2");
    }
    stepFail = false;

    // *** 3.3 ***
    if(savedData.eradicationSocialPoliticalC !== null){
        cookieData.eradicationSocialPoliticalC = savedData.eradicationSocialPoliticalC;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.3");
    }
    stepFail = false;
    
    // *** 3.4 ***
    if(savedData.eradicationPreventingReproductionA !== null){
        cookieData.eradicationPreventingReproductionA = savedData.eradicationPreventingReproductionA;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.4");
    }
    stepFail = false;

    // *** 3.5 ***
    if(savedData.eradicationPreventingReproductionB !== null){
        cookieData.eradicationPreventingReproductionB = savedData.eradicationPreventingReproductionB;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.5");
    }
    stepFail = false;

    // *** 3.6 ***
    if(savedData.eradicationDetection !== null){
        cookieData.eradicationDetection = savedData.eradicationDetection;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.6");
    }
    stepFail = false;

    // *** 3.7 ***
    if(savedData.eradicationEffectiveControlA !== null){
        cookieData.eradicationEffectiveControlA = savedData.eradicationEffectiveControlA;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.7");
    }
    stepFail = false;

    // *** 3.8 ***
    if(savedData.eradicationEffectiveControlB !== null){
        cookieData.eradicationEffectiveControlB = savedData.eradicationEffectiveControlB;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.8");
    }
    stepFail = false;

    // *** 3.9 ***
    if(savedData.eradicationNontargetImpacts !== null){
        cookieData.eradicationNontargetImpacts = savedData.eradicationNontargetImpacts;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.9");
    }
    stepFail = false;

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
    
    // Make sure the correct substep is displayed
    if(currentStep === "1.1"){
        if($('#content_step_project_background_container').hasClass('content_step_inactive')){
            $('#content_step_project_background_container').removeClass('content_step_inactive').addClass('content_step_active');
        }
        if($('#content_nav_back').hasClass('content_nav_base_active')){
            $('#content_nav_back').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
        }
    }else if(currentStep === "1.2"){
        if($('#content_step_project_timeframe_container').hasClass('content_step_inactive')){
            $('#content_step_project_timeframe_container').removeClass('content_step_inactive').addClass('content_step_active');
        }
        if($('#content_nav_back').hasClass('content_nav_base_inactive')){
            $('#content_nav_back').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
        }
    }else if(currentStep === "1.3"){
        if($('#content_step_distribution_and_abundance_container').hasClass('content_step_inactive')){
            $('#content_step_distribution_and_abundance_container').removeClass('content_step_inactive').addClass('content_step_active');
        }
        if($('#content_nav_back').hasClass('content_nav_base_inactive')){
            $('#content_nav_back').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
        }
    }else if(currentStep === "1.4"){
        if($('#content_step_imapinvasives_container').hasClass('content_step_inactive')){
            $('#content_step_imapinvasives_container').removeClass('content_step_inactive').addClass('content_step_active');
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
    if(currentStep === "1.1"){
        // Check if there is any data present
        if(cookieData.projectBackgroundAssessors !== null){ projectBackgroundArray.projectBackgroundAssessorsAnswer = cookieData.projectBackgroundAssessors; }
        if(cookieData.projectBackgroundAssessorsDate !== null){ projectBackgroundArray.projectBackgroundAssessorsDateAnswer = cookieData.projectBackgroundAssessorsDate; }
        if(cookieData.projectBackgroundScientificName !== null){ projectBackgroundArray.projectBackgroundScientificNameAnswer = cookieData.projectBackgroundScientificName; }
        if(cookieData.projectBackgroundCommonName !== null){ projectBackgroundArray.projectBackgroundCommonNameAnswer = cookieData.projectBackgroundCommonName; }
        if(cookieData.projectBackgroundScale !== null){ projectBackgroundArray.projectBackgroundScaleAnswer = cookieData.projectBackgroundScale; }
        if(cookieData.projectBackgroundPRISMWMA !== null){ projectBackgroundArray.projectBackgroundPRISMWMAAnswer = cookieData.projectBackgroundPRISMWMA; }
        if(cookieData.projectBackgroundConservationTargetImpacted !== null){ projectBackgroundArray.projectBackgroundConservationTargetImpactedAnswer = cookieData.projectBackgroundConservationTargetImpacted; }
        if(cookieData.projectBackgroundProjectAreaName !== null){ projectBackgroundArray.projectBackgroundProjectAreaNameAnswer = cookieData.projectBackgroundProjectAreaName; }
        if(cookieData.projectBackgroundProjectAreaSize !== null){ projectBackgroundArray.projectBackgroundProjectAreaSizeAnswer = cookieData.projectBackgroundProjectAreaSize; }
        if(cookieData.projectBackgroundPropertyOwners !== null){ projectBackgroundArray.projectBackgroundPropertyOwnersAnswer = cookieData.projectBackgroundPropertyOwners; }
        if(cookieData.projectBackgroundProjectState !== null){ projectBackgroundArray.projectBackgroundProjectStateAnswer = cookieData.projectBackgroundProjectState; }
        if(cookieData.projectBackgroundProjectCounty !== null){ projectBackgroundArray.projectBackgroundProjectCountyAnswer = cookieData.projectBackgroundProjectCounty; }
        if(cookieData.projectBackgroundProjectCoordX !== null){ projectBackgroundArray.projectBackgroundProjectCoordXAnswer = cookieData.projectBackgroundProjectCoordX; }
        if(cookieData.projectBackgroundProjectCoordY !== null){ projectBackgroundArray.projectBackgroundProjectCoordYAnswer = cookieData.projectBackgroundProjectCoordY; }
        if(cookieData.projectBackgroundProjectCoordSystem !== null){ projectBackgroundArray.projectBackgroundProjectCoordSystemAnswer = cookieData.projectBackgroundProjectCoordSystem; }
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
    }else if(currentStep === "1.2"){
        // Check if there is any data present
        if(cookieData.projectBackgroundProjectGoal !== null){ projectBackgroundArray.projectBackgroundProjectGoalAnswer = cookieData.projectBackgroundProjectGoal; }
        if(cookieData.projectBackgroundNumberOfYearsToComplete !== null){ projectBackgroundArray.projectBackgroundNumberOfYearsToCompleteAnswer = cookieData.projectBackgroundNumberOfYearsToComplete; }
        if(cookieData.projectBackgroundStartDate !== null){ projectBackgroundArray.projectBackgroundStartDateAnswer = cookieData.projectBackgroundStartDate; }
        if(cookieData.projectBackgroundEndDate !== null){ projectBackgroundArray.projectBackgroundEndDateAnswer = cookieData.projectBackgroundEndDate; }
        if(cookieData.projectBackgroundOngoingProject !== null){ projectBackgroundArray.projectBackgroundOngoingProjectAnswer = cookieData.projectBackgroundOngoingProject; }
        if(cookieData.projectBackgroundControlRequired !== null){ projectBackgroundArray.projectBackgroundControlRequiredAnswer = cookieData.projectBackgroundControlRequired; }
        // Populate Fields w/ values
        $('#project_background_project_goal').prop('value', projectBackgroundArray.projectBackgroundProjectGoalAnswer);
        $('#project_background_number_of_years_to_complete').prop('value', projectBackgroundArray.projectBackgroundNumberOfYearsToCompleteAnswer);
        $('#project_background_start_date').prop('value', projectBackgroundArray.projectBackgroundStartDateAnswer);
        $('#project_background_end_date').prop('value', projectBackgroundArray.projectBackgroundEndDateAnswer);
        $('#project_background_ongoing_project').prop('value', projectBackgroundArray.projectBackgroundOngoingProjectAnswer);
        $('#project_background_control_required').prop('value', projectBackgroundArray.projectBackgroundControlRequiredAnswer);
    }else if(currentStep === "1.3"){
        // Check if there is any data present
        if(cookieData.projectBackgroundGrossInvadedArea !== null){ projectBackgroundArray.projectBackgroundGrossInvadedAreaAnswer = cookieData.projectBackgroundGrossInvadedArea; }
        if(cookieData.projectBackgroundNetInvadedArea !== null){ projectBackgroundArray.projectBackgroundNetInvadedAreaAnswer = cookieData.projectBackgroundNetInvadedArea; }
        if(cookieData.projectBackgroundNumberOfOccurances !== null){ projectBackgroundArray.projectBackgroundNumberOfOccurancesAnswer = cookieData.projectBackgroundNumberOfOccurances; }
        // Populate Fields w/ values
        $('#project_background_gross_invaded_area').prop('value', projectBackgroundArray.projectBackgroundGrossInvadedAreaAnswer);
        $('#project_background_net_invaded_area').prop('value', projectBackgroundArray.projectBackgroundNetInvadedAreaAnswer);
        $('#project_background_number_of_occurances').prop('value', projectBackgroundArray.projectBackgroundNumberOfOccurancesAnswer);
    }else if(currentStep === "1.4"){
        // Check if there is any data present
        if(cookieData.projectBackgroundImapShareResults !== null){ projectBackgroundArray.projectBackgroundImapShareResultsAnswer = cookieData.projectBackgroundImapShareResults; }
        if(cookieData.projectBackgroundImapAccount !== null){ projectBackgroundArray.projectBackgroundImapAccountAnswer = cookieData.projectBackgroundImapAccount; }
        // Populate Fields w/ values
        $('#project_background_imap_share_results').prop('value', projectBackgroundArray.projectBackgroundImapShareResultsAnswer);
        $('#project_background_imap_account').prop('value', projectBackgroundArray.projectBackgroundImapAccountAnswer);
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
        if(form_array.projectBackgroundProjectGoalAnswer !== null){
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
            projectBackgroundProjectCoordSystem: projectBackgroundArray.projectBackgroundProjectCoordSystemAnswer
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
            projectBackgroundProjectGoal: projectBackgroundArray.projectBackgroundProjectGoalAnswer,
            projectBackgroundNumberOfYearsToComplete: projectBackgroundArray.projectBackgroundNumberOfYearsToCompleteAnswer,
            projectBackgroundStartDate: projectBackgroundArray.projectBackgroundStartDateAnswer,
            projectBackgroundEndDate: projectBackgroundArray.projectBackgroundEndDateAnswer,
            projectBackgroundOngoingProject: projectBackgroundArray.projectBackgroundOngoingProjectAnswer,
            projectBackgroundControlRequired: projectBackgroundArray.projectBackgroundControlRequiredAnswer
        };
        if(projectBackgroundArray.projectBackgroundProjectGoalAnswer !== null){
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
    }else if(currentStep === "1.2"){
        Project_Background_Substep_Two_Check(projectBackgroundArray);
        Add_Event_To_Field("#project_background_project_goal", "2");
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
        $('#content_progress_bar_strategy_exploration').click(function(){
            if(destinationArray.strategyExploration !== "none"){
                if($('#content_progress_bar_strategy_exploration').hasClass('progress_bar_available')){
                    if(destinationArray.current === "1.1"){ Project_Background_Substep_One_Save();
                    }else if(destinationArray.current === "1.2"){ Project_Background_Substep_Two_Save();
                    }else if(destinationArray.current === "1.3"){ Project_Background_Substep_Three_Save();
                    }else if(destinationArray.current === "1.4"){ Project_Background_Substep_Four_Save(); }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.strategyExploration);
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
            strategySelection: '2.1',
            strategyExploration: '3.1'
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
            strategySelection: '2.1',
            strategyExploration: '3.1'
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
            strategySelection: '2.1',
            strategyExploration: '3.1'
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
            strategySelection: '2.1',
            strategyExploration: '3.1'
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
    // ---------------------------------------------------------------- \\
    // FUNCTION LAYOUT                                                  \\
    // ---------------------------------------------------------------- \\
    // 1 -  Declare variables                                           \\
    // 2 -  Declare subcategory values (If applicable)                  \\
    // 3 -  Ensure correct step container is displayed,                 \\
    //      Check if loading data (Check -> Load -> Populate Fields)    \\
    // 4 -  Function - Strategy_Selection_Substep_Form_Check(formArray) \\
    // 5 -  Function - Strategy_Selection_Substep_Save()                \\
    // 6 -  Function - Strategy_Selection_Check_Boxes(boxName)          \\
    // 7 -  Function - Add_Event_To_Field(fieldLocation, substep)       \\
    // 8 -  Function - Add_Event_To_Nav(destinationArray)               \\
    // 9 -  Populate/Execute - Add_Event_To_Field, Add_Event_To_Nav     \\
    // ---------------------------------------------------------------- \\
    // 1 -  Declare variables                                           \\
    var strategySelectionArray = {
            strategySelectionNYSScore: null,
            strategySelectionCheckbox: null,
            strategySelectionDocumentation: null,
            strategySelectionAbundanceAndDistributionCheckbox: null,
            strategySelectionAbundanceAndDistributionDocumentation: null,
            strategySelectionAbundanceAndDistributionConfirm: null,
            strategySelectionAbundanceAndDistributionAlternative: null,
            strategySelectionAbundanceAndDistributionAlternativeDocumentation: null
        },
        destinationArray = {};
    // 2 -  Declare subcategory values (If applicable)                  \\
    var mainTitleEradicationStateScale = '(<strong>Eradication</strong> Recommended)',
        mainTitleContainmentStateScale = '(<strong>Containment</strong> Recommended)',
        mainTitleEradicationProjectScale = '(<strong>Eradication</strong> Recommended)',
        mainTitleContainmentProjectScale = '(<strong>Containment</strong> Recommended)',
        mainTitleSuppression = '(<strong>Suppression</strong> Recommended)',
        subtextEradicationStateScale = '<strong>Eradication</strong> at the <strong>state</strong> scale is recommended based on the distribution of the invasive plant.',
        subtextContainmentStateScale = '<strong>Containment</strong> at the <strong>state</strong> scale is recommended based on the distribution of the invasive plant.',
        subtextEradicationProjectScale = '<strong>Eradication</strong> at the <strong>project</strong> scale is recommended based on the distribution of the invasive plant.',
        subtextContainmentProjectScale = '<strong>Containment</strong> at the <strong>project</strong> scale is recommended based on the distribution of the invasive plant.',
        subtextSuppression = '<strong>Suppression</strong> at the <strong>project</strong> scale is recommended based on the distribution of the invasive plant.';
    // 3 -  Ensure correct step container is displayed,                 \\
    //      Check if loading data (Check -> Load -> Populate Fields)    \\
    if($('#content_nav_back').hasClass('content_nav_base_inactive')){
        $('#content_nav_back').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
    }
    switch(currentStep){
        case "2.1":
            $('#content_step_strategy_selection_container').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.strategySelectionNYSScore !== null){ strategySelectionArray.strategySelectionNYSScore = cookieData.strategySelectionNYSScore; }
            if(cookieData.strategySelectionCheckbox !== null){ strategySelectionArray.strategySelectionCheckbox = cookieData.strategySelectionCheckbox; }
            if(cookieData.strategySelectionDocumentation !== null){ strategySelectionArray.strategySelectionDocumentation = cookieData.strategySelectionDocumentation; }
            // Populate Fields
            $('#strategy_selection_NYS_score').prop('value', strategySelectionArray.strategySelectionNYSScore);
            $('#strategy_selection_documentation').prop('value', strategySelectionArray.strategySelectionDocumentation);
            switch(strategySelectionArray.strategySelectionCheckbox){
                case "#strategy_selection_ecological_impact":
                    $('#strategy_selection_ecological_impact').prop('checked', true);
                    break;
                case "#strategy_selection_limited_distribution":
                    $('#strategy_selection_limited_distribution').prop('checked', true);
                    break;
                case "#strategy_selection_widespread_distribution":
                    $('#strategy_selection_widespread_distribution').prop('checked', true);
                    break;
                case "#strategy_selection_negligible_impact":
                    $('#strategy_selection_negligible_impact').prop('checked', true);
                    break;
                case "#strategy_selection_significant_harm":
                    $('#strategy_selection_significant_harm').prop('checked', true);
                    break;
            }
            break;
        case "2.2":
            $('#content_step_abundance_and_distribution_container').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.strategySelectionAbundanceAndDistributionCheckbox !== null){ strategySelectionArray.strategySelectionAbundanceAndDistributionCheckbox = cookieData.strategySelectionAbundanceAndDistributionCheckbox; }
            if(cookieData.strategySelectionAbundanceAndDistributionDocumentation !== null){ strategySelectionArray.strategySelectionAbundanceAndDistributionDocumentation = cookieData.strategySelectionAbundanceAndDistributionDocumentation; }
            // Populate Fields
            $('#strategy_selection_abundance_and_distribution_documentation').prop('value', strategySelectionArray.strategySelectionAbundanceAndDistributionDocumentation);
            switch(strategySelectionArray.strategySelectionAbundanceAndDistributionCheckbox){
                case "#strategy_selection_eradication_state_scale":
                    $('#strategy_selection_eradication_state_scale').prop('checked', true);
                    break;
                case "#strategy_selection_containment_state_scale":
                    $('#strategy_selection_containment_state_scale').prop('checked', true);
                    break;
                case "#strategy_selection_eradication_project_scale":
                    $('#strategy_selection_eradication_project_scale').prop('checked', true);
                    break;
                case "#strategy_selection_containment_project_scale":
                    $('#strategy_selection_containment_project_scale').prop('checked', true);
                    break;
                case "#strategy_selection_suppression":
                    $('#strategy_selection_suppression').prop('checked', true);
                    break;
            }
            break;
        case "2.3":
            $('#content_step_strategy_confirmation_container').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.strategySelectionAbundanceAndDistributionCheckbox !== null){ strategySelectionArray.strategySelectionAbundanceAndDistributionCheckbox = cookieData.strategySelectionAbundanceAndDistributionCheckbox; }
            if(cookieData.strategySelectionAbundanceAndDistributionConfirm !== null){ strategySelectionArray.strategySelectionAbundanceAndDistributionConfirm = cookieData.strategySelectionAbundanceAndDistributionConfirm; }
            // Populate Fields
            switch(strategySelectionArray.strategySelectionAbundanceAndDistributionConfirm){
                case "yes":
                    $('#strategy_confirmation_yes').prop('checked', true);
                    break;
                case "no":
                    $('#strategy_confirmation_no').prop('checked', true);
                    break;
            }
            break;
        case "2.4":
            $('#content_step_strategy_alternative_container').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.strategySelectionAbundanceAndDistributionAlternative !== null){ strategySelectionArray.strategySelectionAbundanceAndDistributionAlternative = cookieData.strategySelectionAbundanceAndDistributionAlternative; }
            if(cookieData.strategySelectionAbundanceAndDistributionAlternativeDocumentation !== null){ strategySelectionArray.strategySelectionAbundanceAndDistributionAlternativeDocumentation = cookieData.strategySelectionAbundanceAndDistributionAlternativeDocumentation; }
            // Populate Fields
            $('#strategy_selection_alternative_documentation').prop('value', strategySelectionArray.strategySelectionAbundanceAndDistributionAlternativeDocumentation);
            switch(strategySelectionArray.strategySelectionAbundanceAndDistributionAlternative){
                case "#strategy_selection_alternative_eradication":
                    $('#strategy_selection_alternative_eradication').prop('checked', true);
                    break;
                case "#strategy_selection_alternative_containment":
                    $('#strategy_selection_alternative_containment').prop('checked', true);
                    break;
                case "#strategy_selection_alternative_suppression":
                    $('#strategy_selection_alternative_suppression').prop('checked', true);
                    break;
            }
            break;
    }
    // 4 -  Function - Strategy_Selection_Substep_Form_Check(formArray) \\
    function Strategy_Selection_Substep_Form_Check(formArray){
        var tempValue,
            nextStep,
            proceedContainer = null;
        // Setup Values
        if(currentStep === "2.1"){
            tempValue = formArray.strategySelectionNYSScore;
            nextStep = "#content_step_strategy_selection_substep_two";
        }else if(currentStep === "2.2"){
            tempValue = formArray.strategySelectionAbundanceAndDistributionCheckbox;
            nextStep = "#content_step_strategy_selection_substep_three";
        }else if(currentStep === "2.3"){
            tempValue = formArray.strategySelectionAbundanceAndDistributionConfirm;
            // Determine if moving to 2.4 or 3.1
            switch(formArray.strategySelectionAbundanceAndDistributionConfirm){
                case "yes":
                    nextStep = "#content_step_strategy_exploration_eradication_substep_one";
                    proceedContainer = "#content_progress_bar_strategy_exploration";
                    break;
                case "no":
                    nextStep = "#content_step_strategy_selection_substep_four";
                    break;
            }
        }else if(currentStep === "2.4"){
            tempValue = formArray.strategySelectionAbundanceAndDistributionAlternative;
            nextStep = "#content_step_strategy_exploration_eradication_substep_one";
            proceedContainer = "#content_progress_bar_strategy_exploration";
        }
        // Execute
        if(tempValue !== null){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                $('#content_nav_forward').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
                // Substep Bar & Progress Bar
                $(nextStep).removeClass('content_substep_inactive').addClass('content_substep_available');
                if(proceedContainer !== null){
                    $(proceedContainer).removeClass('progress_bar_inactive').addClass('progress_bar_available');
                }
            }
        }else if(tempValue === null){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                $('#content_nav_forward').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
                // Substep Bar & Progress Bar
                $(nextStep).removeClass('content_substep_available').addClass('content_substep_inactive');
                if(proceedContainer !== null){
                    $(proceedContainer).removeClass('progress_bar_available').addClass('progress_bar_inactive');
                }
            }
        }
    };
    // 5 -  Function - Strategy_Selection_Substep_Save()                \\
    function Strategy_Selection_Substep_Save(){
        // Variables
        var saveArray,
            requiredField,
            tempPush = currentStep;
        // Setup Values
        if(currentStep === "2.1"){
            saveArray = {
                strategySelectionNYSScore: strategySelectionArray.strategySelectionNYSScore,
                strategySelectionCheckbox: strategySelectionArray.strategySelectionCheckbox,
                strategySelectionDocumentation: strategySelectionArray.strategySelectionDocumentation
                
            };
            requiredField = strategySelectionArray.strategySelectionNYSScore;
        }else if(currentStep === "2.2"){
            saveArray = {
                strategySelectionAbundanceAndDistributionCheckbox: strategySelectionArray.strategySelectionAbundanceAndDistributionCheckbox,
                strategySelectionAbundanceAndDistributionDocumentation: strategySelectionArray.strategySelectionAbundanceAndDistributionDocumentation
            };
            requiredField = strategySelectionArray.strategySelectionAbundanceAndDistributionCheckbox;
        }else if(currentStep === "2.3"){
            saveArray = {
                strategySelectionAbundanceAndDistributionConfirm: strategySelectionArray.strategySelectionAbundanceAndDistributionConfirm
            };
            requiredField = strategySelectionArray.strategySelectionAbundanceAndDistributionConfirm;
        }else if(currentStep === "2.4"){
            saveArray = {
                strategySelectionAbundanceAndDistributionAlternative: strategySelectionArray.strategySelectionAbundanceAndDistributionAlternative,
                strategySelectionAbundanceAndDistributionAlternativeDocumentation: strategySelectionArray.strategySelectionAbundanceAndDistributionAlternativeDocumentation
            };
            requiredField = strategySelectionArray.strategySelectionAbundanceAndDistributionAlternative;
        }
        // Execute
        if(requiredField !== null){
            var addStep = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === tempPush){
                    addStep = false;
                }
            }
            if(addStep === true){
                completedSteps.push(tempPush);
            }
        }
        Save_Cookie(saveArray, tempPush, completedSteps);
    };
    // 6 -  Function - Strategy_Selection_Check_Boxes(boxName)          \\
    function Strategy_Selection_Check_Boxes(boxName){
        if(currentStep === "2.1"){
            $('#strategy_selection_ecological_impact').prop('checked', false);
            $('#strategy_selection_limited_distribution').prop('checked', false);
            $('#strategy_selection_widespread_distribution').prop('checked', false);
            $('#strategy_selection_negligible_impact').prop('checked', false);
            $('#strategy_selection_significant_harm').prop('checked', false);
        }else if(currentStep === "2.2"){
            $('#strategy_selection_eradication_state_scale').prop('checked', false);
            $('#strategy_selection_containment_state_scale').prop('checked', false);
            $('#strategy_selection_eradication_project_scale').prop('checked', false);
            $('#strategy_selection_containment_project_scale').prop('checked', false);
            $('#strategy_selection_suppression').prop('checked', false);
        }else if(currentStep === "2.3"){
            $('#strategy_confirmation_yes').prop('checked', false);
            $('#strategy_confirmation_no').prop('checked', false);
        }else if(currentStep === "2.4"){
            $('#strategy_selection_alternative_eradication').prop('checked', false);
            $('#strategy_selection_alternative_containment').prop('checked', false);
            $('#strategy_selection_alternative_suppression').prop('checked', false);
        }
        // Check the boxName
        $(boxName).prop('checked', true);
        // Assign the value
        switch(boxName){
            case '#strategy_selection_ecological_impact':
                strategySelectionArray.strategySelectionCheckbox = '#strategy_selection_ecological_impact'; break;
            case '#strategy_selection_limited_distribution':
                strategySelectionArray.strategySelectionCheckbox = '#strategy_selection_limited_distribution'; break;
            case '#strategy_selection_widespread_distribution':
                strategySelectionArray.strategySelectionCheckbox = '#strategy_selection_widespread_distribution'; break;
            case '#strategy_selection_negligible_impact':
                strategySelectionArray.strategySelectionCheckbox = '#strategy_selection_negligible_impact'; break;
            case '#strategy_selection_significant_harm':
                strategySelectionArray.strategySelectionCheckbox = '#strategy_selection_significant_harm'; break;
            case '#strategy_selection_eradication_state_scale':
                strategySelectionArray.strategySelectionAbundanceAndDistributionCheckbox = '#strategy_selection_eradication_state_scale'; break;
            case '#strategy_selection_containment_state_scale':
                strategySelectionArray.strategySelectionAbundanceAndDistributionCheckbox = '#strategy_selection_containment_state_scale'; break;
            case '#strategy_selection_eradication_project_scale':
                strategySelectionArray.strategySelectionAbundanceAndDistributionCheckbox = '#strategy_selection_eradication_project_scale'; break;
            case '#strategy_selection_containment_project_scale':
                strategySelectionArray.strategySelectionAbundanceAndDistributionCheckbox = '#strategy_selection_containment_project_scale'; break;
            case '#strategy_selection_suppression':
                strategySelectionArray.strategySelectionAbundanceAndDistributionCheckbox = '#strategy_selection_suppression'; break;
            case '#strategy_confirmation_yes':
                strategySelectionArray.strategySelectionAbundanceAndDistributionConfirm = '#strategy_confirmation_yes'; break;
            case '#strategy_confirmation_no':
                strategySelectionArray.strategySelectionAbundanceAndDistributionConfirm = '#strategy_confirmation_no'; break;
            case '#strategy_selection_alternative_eradication':
                strategySelectionArray.strategySelectionAbundanceAndDistributionAlternative = '#strategy_selection_alternative_eradication'; break;
            case '#strategy_selection_alternative_containment':
                strategySelectionArray.strategySelectionAbundanceAndDistributionAlternative = '#strategy_selection_alternative_containment'; break;
            case '#strategy_selection_alternative_suppression':
                strategySelectionArray.strategySelectionAbundanceAndDistributionAlternative = '#strategy_selection_alternative_suppression'; break;
        }
        Strategy_Selection_Substep_Form_Check(strategySelectionArray);
    };
    // 7 -  Function - Add_Event_To_Field(fieldLocation, substep)       \\
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
            }else if(fieldLocation === "#strategy_selection_abundance_and_distribution_documentation"){ strategySelectionArray.strategySelectionAbundanceAndDistributionDocumentationAnswer = tempHolder; 
            }else if(fieldLocation === "#strategy_selection_alternative_documentation"){ strategySelectionArray.strategySelectionAbundanceAndDistributionAlternativeDocumentationAnswer = tempHolder; }
            Strategy_Selection_Substep_Form_Check(strategySelectionArray);
        });
    };
    // 8 -  Function - Add_Event_To_Nav(destinationArray)               \\
    function Add_Event_To_Nav(destinationArray){
        $('#content_nav_forward').click(function(){
            if(destinationArray.forward !== 'none'){
                if($('#content_nav_forward').hasClass('content_nav_base_active')){
                    Strategy_Selection_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.forward);
                }
            }
        });
        $('#content_nav_back').click(function(){
            if(destinationArray.back !== 'none'){
                if($('#content_nav_back').hasClass('content_nav_base_active')){
                    Strategy_Selection_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.back);
                }
            }
        });
        $('#content_step_strategy_strategy_selection_substep_one').click(function(){
            if(destinationArray.substep_one !== 'none'){
                if($('#content_step_strategy_selection_substep_one').hasClass('content_substep_available')){
                    Strategy_Selection_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_one);
                }
            }
        });
        $('#content_step_strategy_strategy_selection_substep_two').click(function(){
            if(destinationArray.substep_two !== 'none'){
                if($('#content_step_strategy_selection_substep_two').hasClass('content_substep_available')){
                    Strategy_Selection_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_two);
                }
            }
        });
        $('#content_step_strategy_strategy_selection_substep_three').click(function(){
            if(destinationArray.substep_three !== 'none'){
                if($('#content_step_strategy_selection_substep_three').hasClass('content_substep_available')){
                    Strategy_Selection_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_three);
                }
            }
        });
        $('#content_step_strategy_strategy_selection_substep_four').click(function(){
            if(destinationArray.substep_four !== 'none'){
                if($('#content_step_strategy_selection_substep_four').hasClass('content_substep_available')){
                    Strategy_Selection_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_four);
                }
            }
        });
        $('#content_progress_bar_project_background').click(function(){
        });
        $('#content_progress_bar_strategy_selection').click(function(){
        });
        $('#content_progress_bar_strategy_exploration').click(function(){
        });
    };
    // TODO: BEGIN HERE

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
        var temp = strategySelectionArray.strategySelectionAbundanceAndDistributionCheckboxAnswer;
        if(temp === 'eradicationStateScale'){
            $('#strategy_confirmation_main_title_container').empty().append(mainTitleEradicationStateScale);
            $('#strategy_confirmation_subtext_container').empty().append(subtextEradicationStateScale);
        }else if(temp === 'containmentStateScale'){
            $('#strategy_confirmation_main_title_container').empty().append(mainTitleContainmentStateScale);
            $('#strategy_confirmation_subtext_container').empty().append(subtextContainmentStateScale);
        }else if(temp === 'eradicationProjectScale'){
            $('#strategy_confirmation_main_title_container').empty().append(mainTitleEradicationProjectScale);
            $('#strategy_confirmation_subtext_container').empty().append(subtextEradicationProjectScale);
        }else if(temp === 'containmentProjectScale'){
            $('#strategy_confirmation_main_title_container').empty().append(mainTitleContainmentProjectScale);
            $('#strategy_confirmation_subtext_container').empty().append(subtextContainmentProjectScale);
        }else if(temp === 'suppression'){
            $('#strategy_confirmation_main_title_container').empty().append(mainTitleSuppression);
            $('#strategy_confirmation_subtext_container').empty().append(subtextSuppression);
        }
        // Checkbox Array
        $('#strategy_confirmation_yes').change(function(){ Strategy_Selection_Substep_Three_Check_Boxes('#strategy_confirmation_yes'); });
        $('#strategy_confirmation_no').change(function(){ Strategy_Selection_Substep_Three_Check_Boxes('#strategy_confirmation_no'); });
    }else if(currentStep === "2.4"){
        Strategy_Selection_Substep_Four_Check(strategySelectionArray);
        Add_Event_To_Field("#strategy_selection_alternative_documentation", "4");
        // Checkbox Array
        $('#strategy_selection_alternative_eradication').change(function(){ Strategy_Selection_Substep_Four_Check_Boxes('#strategy_selection_alternative_eradication'); });
        $('#strategy_selection_alternative_containment').change(function(){ Strategy_Selection_Substep_Four_Check_Boxes('#strategy_selection_alternative_containment'); });
        $('#strategy_selection_alternative_suppression').change(function(){ Strategy_Selection_Substep_Four_Check_Boxes('#strategy_selection_alternative_suppression'); });
    }
    
    function Add_Event_To_Nav(destinationArray){
        $('#content_nav_forward').click(function(){
            if(destinationArray.current === "2.3"){
                if($('#content_nav_forward').hasClass('content_nav_base_active')){
                    Strategy_Selection_Substep_Three_Save();
                }
            }
            // We are going to need to hard code quick fix this next section
            var tempForward;
            if(strategySelectionArray.strategySelectionAbundanceAndDistributionConfirmAnswer === "yes"){
                tempForward = "3.1";
            }else{
                tempForward = "2.4";
            }
            if(currentStep === "2.3"){
                    if($('#content_nav_forward').hasClass('content_nav_base_active')){
                        if(destinationArray.current === "2.1"){ Strategy_Selection_Substep_One_Save();
                        }else if(destinationArray.current === "2.2"){ Strategy_Selection_Substep_Two_Save();
                        }else if(destinationArray.current === "2.3"){ Strategy_Selection_Substep_Three_Save();
                        }else if(destinationArray.current === "2.4"){ Strategy_Selection_Substep_Four_Save(); }
                        Check_Available_Steps(cookieData, completedSteps, tempForward);
                    }
            }else{
                if(destinationArray.forward !== "none"){
                    if($('#content_nav_forward').hasClass('content_nav_base_active')){
                        if(destinationArray.current === "2.1"){ Strategy_Selection_Substep_One_Save();
                        }else if(destinationArray.current === "2.2"){ Strategy_Selection_Substep_Two_Save();
                        }else if(destinationArray.current === "2.3"){ Strategy_Selection_Substep_Three_Save();
                        }else if(destinationArray.current === "2.4"){ Strategy_Selection_Substep_Four_Save(); }
                        Check_Available_Steps(cookieData, completedSteps, destinationArray.forward);
                    }
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
            strategySelection: 'none',
            strategyExploration: '3.1'
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
            strategySelection: 'none',
            strategyExploration: '3.1'
        };
    }else if(currentStep === "2.3"){
        // Set Forward for none
        var destinationArray = {
            current: '2.3',
            forward: 'none',
            back: '2.2',
            substep_one: '2.1',
            substep_two: '2.2',
            substep_three: 'none',
            substep_four: '2.4',
            projectBackground: '1.1',
            strategySelection: 'none',
            strategyExploration: '3.1'
        };
        if(strategySelectionArray.strategySelectionAbundanceAndDistributionConfirmAnswer === "yes"){
            var destinationArray = {
                current: '2.3',
                forward: '3.1',
                back: '2.2',
                substep_one: '2.1',
                substep_two: '2.2',
                substep_three: 'none',
                substep_four: '2.4',
                projectBackground: '1.1',
                strategySelection: 'none',
                strategyExploration: '3.1'
            };
        }else if(strategySelectionArray.strategySelectionAbundanceAndDistributionConfirmAnswer === "no"){
            var destinationArray = {
                current: '2.3',
                forward: '2.4',
                back: '2.2',
                substep_one: '2.1',
                substep_two: '2.2',
                substep_three: 'none',
                substep_four: '2.4',
                projectBackground: '1.1',
                strategySelection: 'none',
                strategyExploration: '3.1'
            }; 
        }
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
            strategySelection: 'none',
            strategyExploration: '3.1'
        };
    }
    Add_Event_To_Nav(destinationArray);
};

/***********************************************\
 * Step(3) - Eradication                       *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s)*
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Strategy_Exploration_Eradication(cookieData, completedSteps, currentStep){
    // ------------------------------------------------------------- \\
    // FUNCTION LAYOUT                                               \\
    // ------------------------------------------------------------- \\
    // 1 -  Declare variables                                        \\
    // 2 -  Declare subcategory values (If applicable)               \\
    // 3 -  Ensure correct step container is displayed,              \\
    //      Check if loading data (Check -> Load -> Populate Fields) \\
    // 4 -  Function - Eradication_Substep_Form_Check(formArray)     \\
    // 5 -  Function - Eradication_Substep_Save()                    \\
    // 6 -  Function - Eradication_Check_Boxes(boxName)              \\
    // 7 -  Function - Add_Event_To_Field(fieldLocation, substep)    \\
    // 8 -  Function - Add_Event_To_Nav(destinationArray)            \\
    // 9 -  Populate/Execute - Add_Event_To_Field, Add_Event_To_Nav  \\
    // ------------------------------------------------------------- \\
    // 1 -  Declare variables                                        \\
    var eradicationArray = {
            eradicationSocialPoliticalA: null,
            eradicationSocialPoliticalADocumentation: null,
            eradicationSocialPoliticalB: null,
            eradicationSocialPoliticalBDocumentation: null,
            eradicationSocialPoliticalC: null,
            eradicationSocialPoliticalCDocumentation: null,
            eradicationPreventingReproductionA: null,
            eradicationPreventingReproductionADocumentation: null,
            eradicationPreventingReproductionB: null,
            eradicationPreventingReproductionBDocumentation: null,
            eradicationDetection: null,
            eradicationDetectionDocumentation: null,
            eradicationEffectiveControlA: null,
            eradicationEffectiveControlADocumentation: null,
            eradicationEffectiveControlAControlMethod: null,
            eradicationEffectiveControlAControlMethodDescription: null,
            eradicationEffectiveControlB: null,
            eradicationEffectiveControlBDocumentation: null,
            eradicationNontargetImpacts: null,
            eradicationNontargetImpactsDocumentation: null
        },
        saveArray = {},
        destinationArray = {};
    // 2 -  Declare subcategory values (If applicable)               \\
    // 3 -  Ensure correct step container is displayed,              \\
    //      Check if loading data (Check -> Load -> Populate Fields) \\
    if($('#content_nav_back').hasClass('content_nav_base_inactive')){
        $('#content_nav_back').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
    }
    switch(currentStep){
        case "3.1":
            $('#content_step_strategy_exploration_eradication_SocialPoliticalA').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.eradicationSocialPoliticalA !== null){ eradicationArray.eradicationSocialPoliticalA = cookieData.eradicationSocialPoliticalA; }
            if(cookieData.eradicationSocialPoliticalADocumentation !== null){ eradicationArray.eradicationSocialPoliticalADocumentation = cookieData.eradicationSocialPoliticalADocumentation; }
            // Populate Fields
            switch(eradicationArray.eradicationSocialPoliticalA){
                case "#eradication_SocialPoliticalA_yes":
                    $('#eradication_SocialPoliticalA_yes').prop('checked', true);
                    break;
                case "#eradication_SocialPoliticalA_no":
                    $('#eradication_SocialPoliticalA_no').prop('checked', true);
                    break;
                case "#eradication_SocialPoliticalA_uncertain":
                    $('#eradication_SocialPoliticalA_uncertain').prop('checked', true);
                    break;
            }
            $('#eradication_SocialPoliticalA_documentation').prop('value', eradicationArray.eradicationSocialPoliticalADocumentation);
            break;
        case "3.2":
            $('#content_step_strategy_exploration_eradication_SocialPoliticalB').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.eradicationSocialPoliticalB !== null){ eradicationArray.eradicationSocialPoliticalB = cookieData.eradicationSocialPoliticalB; }
            if(cookieData.eradicationSocialPoliticalBDocumentation !== null){ eradicationArray.eradicationSocialPoliticalBDocumentation = cookieData.eradicationSocialPoliticalBDocumentation; }
            // Populate Fields
            switch(eradicationArray.eradicationSocialPoliticalB){
                case "#eradication_SocialPoliticalB_yes":
                    $('#eradication_SocialPoliticalB_yes').prop('checked', true);
                    break;
                case "#eradication_SocialPoliticalB_no":
                    $('#eradication_SocialPoliticalB_no').prop('checked', true);
                    break;
                case "#eradication_SocialPolitical_B_uncertain":
                    $('#eradication_SocialPoliticalB_uncertain').prop('checked', true);
                    break;
            }
            $('#eradication_SocialPoliticalB_documentation').prop('value', eradicationArray.eradicationSocialPoliticalBDocumentation);
            break;
        case "3.3":
            $('#content_step_strategy_exploration_eradication_SocialPoliticalC').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.eradicationSocialPoliticalC !== null){ eradicationArray.eradicationSocialPoliticalC = cookieData.eradicationSocialPoliticalC; }
            if(cookieData.eradicationSocialPoliticalCDocumentation !== null){ eradicationArray.eradicationSocialPoliticalCDocumentation = cookieData.eradicationSocialPoliticalCDocumentation; }
            // Populate Fields
            switch(eradicationArray.eradicationSocialPoliticalC){
                case "#eradication_SocialPoliticalC_yes":
                    $('#eradication_SocialPoliticalC_yes').prop('checked', true);
                    break;
                case "#eraidcation_SocialPolitical_C_no":
                    $('#eradication_SocialPoliticalC_no').prop('checked', true);
                    break;
                case "#eradication_SocialPoliticalC_uncertain":
                    $('#eradication_SocialPoliticalC_uncertain').prop('checked', true);
                    break;
            }
            $('#eradication_SocialPoliticalC_documentation').prop('value', eradicationArray.eradicationSocialPoliticalCDocumentation);
            break;
        case "3.4":
            $('#content_step_strategy_exploration_eradication_PreventingReproductionA').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.eradicationPreventingReproductionA !== null){ eradicationArray.eradicationPreventingReproductionA = cookieData.eradicationPreventingReproductionA; }
            if(cookieData.eradicationPreventingReproductionADocumentation !== null){ eradicationArray.eradicationPreventingReproductionADocumentation = cookieData.eradicationPreventingReproductionADocumentation; }
            // Populate Fields
            switch(eradicationArray.eradicationPreventingReproductionA){
                case "#eradication_PreventingReproductionA_yes":
                    $('#eradication_PreventingReproductionA_yes').prop('checked', true);
                    break;
                case "#eradication_PreventingReproductionA_no":
                    $('#eradication_PreventingReproductionA_no').prop('checked', true);
                    break;
                case "#eradication_PreventingReproductionA_uncertain":
                    $('#eradication_PreventingReproductionA_uncertain').prop('checked', true);
                    break;
            }
            $('#eradication_PreventingReproductionA_documentation').prop('value', eradicationArray.eradicationPreventingReproductionADocumentation);
            break;
        case "3.5":
            $('#content_step_strategy_exploration_eradication_PreventingReproductionB').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.eradicationPreventingReproductionB !== null){ eradicationArray.eradicationPreventingReproductionB = cookieData.eradicationPreventingReproductionB; }
            if(cookieData.eradicationPreventingReproductionBDocumentation !== null){ eradicationArray.eradicationPreventingReproductionBDocumentation = cookieData.eradicationPreventingReproductionBDocumentation; }
            // Populate Fields
            switch(eradicationArray.eradicationPreventingReproductionB){
                case "#eradication_PreventingReproductionB_yes":
                    $('#eradication_PreventingReproductionB_yes').prop('checked', true);
                    break;
                case "#eradication_PreventingReproductionB_no":
                    $('#eradication_PreventingReproductionB_no').prop('checked', true);
                    break;
                case "#eradication_PreventingReproductionB_uncertain":
                    $('#eradication_PreventingReproductionB_uncertain').prop('checked', true);
                    break;
            }
            $('#eradication_PreventingReproductionB_documentation').prop('value', eradicationArray.eradicationPreventingReproductionBDocumentation);
            break;
        case "3.6":
            $('#content_step_strategy_exploration_eradication_Detection').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.eradicationDetection !== null){ eradicationArray.eradicationDetection = cookieData.eradicationDetection; }
            if(cookieData.eradicationDetectionDocumentation !== null){ eradicationArray.eradicationDetectionDocumentation = cookieData.eradicationDetectionDocumentation; }
            // Populate Fields
            switch(eradicationArray.eradicationDetection){
                case "#eradication_Detection_yes":
                    $('#eradication_Detection_yes').prop('checked', true);
                    break;
                case "#eradication_Detection_no":
                    $('#eradication_Detection_no').prop('checked', true);
                    break;
                case "#eradication_Detection_uncertain":
                    $('#eradication_Detection_uncertain').prop('checked', true);
                    break;
            }
            $('#eradication_Detection_documentation').prop('value', eradicationArray.eradicationDetectionDocumentation);
            break;
        case "3.7":
            $('#content_step_strategy_exploration_eradication_EffectiveControlA').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.eradicationEffectiveControlA !== null){ eradicationArray.eradicationEffectiveControlA = cookieData.eradicationEffectiveControlA; }
            if(cookieData.eradicationEffectiveControlADocumentation !== null){ eradicationArray.eradicationEffectiveControlADocumentation = cookieData.eradicationEffectiveControlADocumentation; }
            if(cookieData.eradicationEffectiveControlAControlMethod !== null){ eradicationArray.eradicationEffectiveControlAControlMethod = cookieData.eradicationEffectiveControlAControlMethod; }
            if(cookieData.eradicationEffectiveControlAControlMethodDescription !== null){ eradicationArray.eradicationEffectiveControlAControlMethodDescription = cookieData.eradicationEffectiveControlAControlMethodDescription; }
            // Populate Fields
            switch(eradicationArray.eradicationEffectiveControlA){
                case "#eradication_EffectiveControlA_yes":
                    $('#eradication_EffectiveControlA_yes').prop('checked', true);
                    break;
                case "#eradication_EffectiveControlA_no":
                    $('#eradication_EffectiveControlA_no').prop('checked', true);
                    break;
                case "#eradication_EffectiveControlA_uncertain":
                    $('#eradication_EffectiveControlA_uncertain').prop('checked', true);
                    break;
            }
            $('#eradication_EffectiveControlA_documentation').prop('value', eradicationArray.eradicationEffectiveControlADocumentation);
            switch(eradicationArray.eradicationEffectiveControlAControlMethod){
                case "#eradication_EffectiveControlAControlMethod_manual":
                    $('#eradication_EffectiveControlAControlMethod_manual').prop('checked', true);
                    break;
                case "mechanical":
                    $('#eradication_EffectiveControlAControlMethod_mechanical').prop('checked', true);
                    break;
                case "herbicide":
                    $('#eradication_EffectiveControlAControlMethod_herbicide').prop('checked', true);
                    break;
                case "biological":
                    $('#eradication_EffectiveControlAControlMethod_biological').prop('checked', true);
                    break;
                case "other":
                    $('#eradication_EffectiveControlAControlMethod_other').prop('checked', true);
                    break;
            }
            $('#eradication_EffectiveControlAControlMethodDescription').prop('value', eradicationArray.eradicationEffectiveControlAControlMethodDescription);
            break;
        case "3.8":
            $('#content_step_strategy_exploration_eradication_EffectiveControlB').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.eradicationEffectiveControlB !== null){ eradicationArray.eradicationEffectiveControlB = cookieData.eradicationEffectiveControlB; }
            if(cookieData.eradicationEffectiveControlBDocumentation !== null){ eradicationArray.eradicationEffectiveControlBDocumentation = cookieData.eradicationEffectiveControlBDocumentation; }
            // Populate Fields
            switch(eradicationArray.eradicationEffectiveControlB){
                case "#eradication_EffectiveControlB_yes":
                    $('#eradication_EffectiveControlB_yes').prop('checked', true);
                    break;
                case "#eradication_EffectiveControlB_no":
                    $('#eradication_EffectiveControlB_no').prop('checked', true);
                    break;
                case "#eradication_EffectiveControlB_uncertain":
                    $('#eradication_EffectiveControlB_uncertain').prop('checked', true);
                    break;
            }
            $('#eradication_EffectiveControlB_documentation').prop('value', eradicationArray.eradicationEffectiveControlBDocumentation);
            break;
        case "3.9":
            $('#content_step_strategy_exploration_eradication_NontargetImpacts').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.eradicationNontargetImpacts !== null){ eradicationArray.eradicationNontargetImpacts = cookieData.eradicationNontargetImpacts; }
            if(cookieData.eradicationNontargetImpactsDocumentation !== null){ eradicationArray.eradicationNontargetImpactsDocumentation = cookieData.eradicationNontargetImpactsDocumentation; }
            // Populate Fields
            switch(eradicationArray.eradicationNontargetImpacts){
                case "#eradication_NontargetImpacts_yes":
                    $('#eradication_NontargetImpacts_yes').prop('checked', true);
                    break;
                case "#eradication_NontargetImpacts_no":
                    $('#eradication_NontargetImpacts_no').prop('checked', true);
                    break;
                case "#eradication_NontargetImpacts_uncertain":
                    $('#eradication_NontargetImpacts_uncertain').prop('checked', true);
                    break;
            }
            $('#eradication_NontargetImpacts_documentation').prop('value', eradicationArray.eradicationNontargetImpactsDocumentation);
            break;
        default:
            console.log('ERROR: Cannot find eradication substep. Failed to display container and load data.');
    }
    // 4 -  Function - Eradication_Substep_Form_Check(formArray)     \\
    function Eradication_Substep_Form_Check(formArray){
        var tempValue,
            nextStep;
        // Setup Values
        if(currentStep === "3.1"){
            tempValue = formArray.eradicationSocialPoliticalA;
            nextStep = "#content_step_strategy_exploration_eradication_substep_two";
        }else if(currentStep === "3.2"){
            tempValue = formArray.eradicationSocialPoliticalB;
            nextStep = "#content_step_strategy_exploration_eradication_substep_three";
        }else if(currentStep === "3.3"){
            tempValue = formArray.eradicationSocialPoliticalC;
            nextStep = "#content_step_strategy_exploration_eradication_substep_four";
        }else if(currentStep === "3.4"){
            tempValue = formArray.eradicationPreventingReproductionA;
            nextStep = "#content_step_strategy_exploration_eradication_substep_five";
        }else if(currentStep === "3.5"){
            tempValue = formArray.eradicationPreventingReproductionB;
            nextStep = "#content_step_strategy_exploration_eradication_substep_six";
        }else if(currentStep === "3.6"){
            tempValue = formArray.eradicationDetection;
            nextStep = "#content_step_strategy_exploration_eradication_substep_seven";
        }else if(currentStep === "3.7"){
            tempValue = formArray.eradicationEffectiveControlA;
            nextStep = "#content_step_strategy_exploration_eradication_substep_eight";
        }else if(currentStep === "3.8"){
            tempValue = formArray.eradicationEffectiveControlB;
            nextStep = "#content_step_strategy_exploration_eradication_substep_nine";
        }else if(currentStep === "3.9"){
            tempValue = formArray.eradicationNontargetImpacts;
            nextStep = "";
            // TODO: UPDATE HERE
        }
        // Execute
        if(tempValue !== null){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                $('#content_nav_forward').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
                // Substep Bar
                $(nextStep).removeClass('content_substep_inactive').addClass('content_substep_available');
            }
        }else if(tempValue === null){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                $('#content_nav_forward').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
                // Substep Bar
                $(nextStep).removeClass('content_substep_available').addClass('content_substep_inactive');
            }
        }

    };
    // 5 -  Function - Eradication_Substep_Save()                    \\
    function Eradication_Substep_Save(){
        var saveArray,
            requiredField,
            tempPush = currentStep;
        // Setup Values
        if(currentStep === "3.1"){
            saveArray = {
                eradicationSocialPoliticalA: eradicationArray.eradicationSocialPoliticalA,
                eradicationSocialPoliticalADocumentation: eradicationArray.eradicationSocialPoliticalADocumentation
            };
            requiredField = eradicationArray.eradicationSocialPoliticalA;
        }else if(currentStep === "3.2"){
            saveArray = {
                eradicationSocialPoliticalB: eradicationArray.eradicationSocialPoliticalB,
                eradicationSocialPoliticalBDocumentation: eradicationArray.eradicationSocialPoliticalBDocumentation
            };
            requiredField = eradicationArray.eradicationSocialPoliticalB;
        }else if(currentStep === "3.3"){
            saveArray = {
                eradicationSocialPoliticalC: eradicationArray.eradicationSocialPoliticalC,
                eradicationSocialPoliticalCDocumentation: eradicationArray.eradicationSocialPoliticalCDocumentation
            };
            requiredField = eradicationArray.eradicationSocialPoliticalC;
        }else if(currentStep === "3.4"){
            saveArray = {
                eradicationPreventingReproductionA: eradicationArray.eradicationPreventingReproductionA,
                eradicationPreventingReproductionADocumentation: eradicationArray.eradicationPreventingReproductionADocumentation
            };
            requiredField = eradicationArray.eradicationPreventingReproductionA;
        }else if(currentStep === "3.5"){
            saveArray = {
                eradicationPreventingReproductionB: eradicationArray.eradicationPreventingReproductionB,
                eradicationPreventingReproductionBDocumentation: eradicationArray.eradicationPreventingReproductionBDocumentation
            };
            requiredField = eradicationArray.eradicationPreventingReproductionB;
        }else if(currentStep === "3.6"){
            saveArray = {
                eradicationDetection: eradicationArray.eradicationDetection,
                eradicationDetectionDocumentation: eradicationArray.eradicationDetectionDocumentation
            };
            requiredField = eradicationArray.eradicationDetectionDocumentation;
        }else if(currentStep === "3.7"){
            saveArray = {
                eradicationEffectiveControlA: eradicationArray.eradicationEffectiveControlA,
                eradicationEffectiveControlADocumentation: eradicationArray.eradicationEffectiveControlADocumentation,
                eradicationEffectiveControlAControlMethod: eradicationArray.eradicationEffectiveControlAControlMethod,
                eradicationEffectiveControlAControlMethodDescription: eradicationArray.eradicationEffectiveControlAControlMethodDescription
            };
            requiredField = eradicationArray.eradicationEffectiveControlA;
        }else if(currentStep === "3.8"){
            saveArray = {
                eradicationEffectiveControlB: eradicationArray.eradicationEffectiveControlB,
                eradicationEffectiveControlBDocumentation: eradicationArray.eradicationEffectiveControlBDocumentation
            };
            requiredField = eradicationArray.eradicationEffectiveControlB;
        }else if(currentStep === "3.9"){
            saveArray = {
                eradicationNontargetImpacts: eradicationArray.eradicationNontargetImpacts,
                eradicationNontargetImpactsDocumentation: eradicationArray.eradicationNontargetImpactsDocumentation
            };
            requiredField = eradicationArray.eradicationNontargetImpacts;
        }
        // Execute
        if(requiredField !== null){
            var addStep = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === tempPush){
                    addStep = false;
                }
            }
            if(addStep === true){
                completedSteps.push(tempPush);
            }
        }
        Save_Cookie(saveArray, tempPush, completedSteps);
    };
    // 6 -  Function - Eradication_Check_Boxes(boxName)              \\
    function Eradication_Check_Boxes(boxName){
        // This is an onClick type function. We need to be certain that no other
        //      boxes in the same category are checked when we save the value.
        if(currentStep === "3.1"){
            $('#eradication_SocialPoliticalA_yes').prop('checked', false);
            $('#eradication_SocialPoliticalA_no').prop('checked', false);
            $('#eradication_SocialPoliticalA_uncertain').prop('checked', false);
        }else if(currentStep === "3.2"){
            $('#eradication_SocialPoliticalB_yes').prop('checked', false);
            $('#eradication_SocialPoliticalB_no').prop('checked', false);
            $('#eradication_SocialPoliticalB_uncertain').prop('checked', false);
        }else if(currentStep === "3.3"){
            $('#eradication_SocialPoliticalC_yes').prop('checked', false);
            $('#eradication_SocialPoliticalC_no').prop('checked', false);
            $('#eradication_SocialPoliticalC_uncertain').prop('checked', false);
        }else if(currentStep === "3.4"){
            $('#eradication_PreventingReproductionA_yes').prop('checked', false);
            $('#eradication_PreventingReproductionA_no').prop('checked', false);
            $('#eradication_PreventingReproductionA_uncertain').prop('checked', false);
        }else if(currentStep === "3.5"){
            $('#eradication_PreventingReproductionB_yes').prop('checked', false);
            $('#eradication_PreventingReproductionB_no').prop('checked', false);
            $('#eradication_PreventingReproductionB_uncertain').prop('checked', false);
        }else if(currentStep === "3.6"){
            $('#eradication_Detection_yes').prop('checked', false);
            $('#eradication_Detection_no').prop('checked', false);
            $('#eradication_Detection_uncertain').prop('checked', false);
        }else if(currentStep === "3.7"){
            if((boxName === '#eradication_EffectiveControlA_yes')||(boxName === 'eradication_EffectiveControlA_no')||(boxName === 'eradication_EffectiveControlA_uncertain')){
                $('#eradication_EffectiveControlA_yes').prop('checked', false);
                $('#eradication_EffectiveControlA_no').prop('checked', false);
                $('#eradication_EffectiveControlA_uncertain').prop('checked', false);
            }else{
                $('#eradication_EffectiveControlAControlMethod_manual').prop('checked', false);
                $('#eradication_EffectiveControlAControlMethod_mechanical').prop('checked', false);
                $('#eradication_EffectiveControlAControlMethod_herbicide').prop('checked', false);
                $('#eradication_EffectiveControlAControlMethod_biological').prop('checked', false);
                $('#eradication_EffectiveControlAControlMethod_other').prop('checked', false);
            }
        }else if(currentStep === "3.8"){
            $('#eradication_EffectiveControlB_yes').prop('checked', false);
            $('#eradication_EffectiveControlB_no').prop('checked', false);
            $('#eradication_EffectiveControlB_uncertain').prop('checked', false);
        }else if(currentStep === "3.9"){
            $('#eradication_NontargetImpacts_yes').prop('checked', false);
            $('#eradication_NontargetImpacts_no').prop('checked', false);
            $('#eradication_NontargetImpacts_uncertain').prop('checked', false);
        }
        // Check the boxName
        $(boxName).prop('checked', true);
        // Assign the value
        switch(boxName){
            case '#eradication_SocialPoliticalA_yes':
                eradicationArray.eradicationSocialPoliticalA = '#eradication_SocialPoliticalA_yes'; break;
            case '#eradication_SocialPoliticalA_no':
                eradicationArray.eradicationSocialPoliticalA = '#eradication_SocialPoliticalA_no'; break;
            case '#eradication_SocialPoliticalA_uncertain':
                eradicationArray.eradicationSocialPoliticalA = '#eradication_SocialPoliticalA_uncertain'; break;
            case '#eradication_SocialPoliticalB_yes':
                eradicationArray.eradicationSocialPoliticalB = '#eradication_SocialPoliticalB_yes'; break;
            case '#eradication_SocialPoliticalB_no':
                eradicationArray.eradicationSocialPoliticalB = '#eradication_SocialPoliticalB_no'; break;
            case '#eradication_SocialPoliticalB_uncertain':
                eradicationArray.eradicationSocialPoliticalB = '#eradication_SocialPoliticalB_uncertain'; break;
            case '#eradication_SocialPoliticalC_yes':
                eradicationArray.eradicationSocialPoliticalC = '#eradication_SocialPoliticalC_yes'; break;
            case '#eradication_SocialPoliticalC_no':
                eradicationArray.eradicationSocialPoliticalC = '#eradication_SocialPoliticalC_no'; break;
            case '#eradication_SocialPoliticalC_uncertain':
                eradicationArray.eradicationSocialPoliticalC = '#eradication_SocialPoliticalC_uncertain'; break;
            case '#eradication_PreventingReproductionA_yes':
                eradicationArray.eradicationPreventingReproductionA = '#eradication_PreventingReproductionA_yes'; break;
            case '#eradication_PreventingReproductionA_no':
                eradicationArray.eradicationPreventingReproductionA = '#eradication_PreventingReproductionA_no'; break;
            case '#eradication_PreventingReproductionA_uncertain':
                eradicationArray.eradicationPreventingReproductionA = '#eradication_PreventingReproductionA_uncertain'; break;
            case '#eradication_PreventingReproductionB_yes':
                eradicationArray.eradicationPreventingReproductionB = '#eradication_PreventingReproductionB_yes'; break;
            case '#eradication_PreventingReproductionB_no':
                eradicationArray.eradicationPreventingReproductionB = '#eradication_PreventingReproductionB_no'; break;
            case '#eradication_PreventingReproductionB_uncertain':
                eradicationArray.eradicationPreventingReproductionB = '#eradication_PreventingReproductionB_uncertain'; break;
            case '#eradication_Detection_yes':
                eradicationArray.eradicationDetection = '#eradication_Detection_yes'; break;
            case '#eradication_Detection_no':
                eradicationArray.eradicationDetection = '#eradication_Detection_no'; break;
            case '#eradication_Detection_uncertain':
                eradicationArray.eradicationDetection = '#eradication_Detection_uncertain'; break;
            case '#eradication_EffectiveControlA_yes':
                eradicationArray.eradicationEffectiveControlA = '#eradication_EffectiveControlA_yes'; break;
            case '#eradication_EffectiveControlA_no':
                eradicationArray.eradicationEffectiveControlA = '#eradication_EffectiveControlA_no'; break;
            case '#eradication_EffectiveControlA_uncertain':
                eradicationArray.eradicationEffectiveControlA = '#eradication_EffectiveControlA_uncertain'; break;
            case '#eradication_EffectiveControlAControlMethod_yes':
                eradicationArray.eradicationEffectiveControlAControlMethod = '#eradication_EffectiveControlAControlMethod_yes'; break;
            case '#eradication_EffectiveControlAControlMethod_no':
                eradicationArray.eradicationEffectiveControlAControlMethod = '#eradication_EffectiveControlAControlMethod_no'; break;
            case '#eradication_EffectiveControlAControlMethod_uncertain':
                eradicationArray.eradicationEffectiveControlAControlMethod = '#eradication_EffectiveControlAControlMethod_uncertain'; break;
            case '#eradication_EffectiveControlB_yes':
                eradicationArray.eradicationEffectiveControlB = '#eradication_EffectiveControlB_yes'; break;
            case '#eradication_EffectiveControlB_no':
                eradicationArray.eradicationEffectiveControlB = '#eradication_EffectiveControlB_no'; break;
            case '#eradication_EffectiveControlB_uncertain':
                eradicationArray.eradicationEffectiveControlB = '#eradication_EffectiveControlB_uncertain'; break;
            case '#eradication_NontargetImpacts_yes':
                eradicationArray.eradicationNontargetImpacts = '#eradication_NontargetImpacts_yes'; break;
            case '#eradication_NontargetImpacts_no':
                eradicationArray.eradicationNontargetImpacts = '#eradication_NontargetImpacts_no'; break;
            case '#eradication_NontargetImpacts_uncertain':
                eradicationArray.eradicationNontargetImpacts = '#eradication_NontargetImpacts_uncertain'; break;
        }
    Eradication_Substep_Form_Check(eradicationArray);
    };
    // 7 -  Function - Add_Event_To_Field(fieldLocation, substep)    \\
    function Add_Event_To_Field(fieldLocation, substep){
        var tempHolder;
        $(fieldLocation).keyup(function(){
            if($(fieldLocation).prop('value') === ""){
                tempHolder = null;
            }else{
                tempHolder = $(fieldLocation).val();
            }
            // Manually fire locations to specifically assign array variable
            if(fieldLocation === "#eradication_SocialPoliticalA_documentation"){ eradicationArray.eradicationSocialPoliticalADocumentation = tempHolder;
            }else if(fieldLocation === "#eradication_SocialPoliticalB_documentation"){ eradicationArray.eradicationSocialPoliticalBDocumentation = tempHolder;
            }else if(fieldLocation === "#eradication_SocialPoliticalC_documentation"){ eradicationArray.eradicationSocialPoliticalCDocumentation = tempHolder;
            }else if(fieldLocation === "#eradication_PreventingReproductionA_documentation"){ eradicationArray.eradicationPreventingReproductionADocumentation = tempHolder;
            }else if(fieldLocation === "#eradication_PreventingReproductionB_documentation"){ eradicationArray.eradicationPreventingReproductionBDocumentation = tempHolder;
            }else if(fieldLocation === "#eradication_Detection_documentation"){ eradicationArray.eradicationDetectionDocumentation = tempHolder;
            }else if(fieldLocation === "#eradication_EffectiveControlA_documentation"){ eradicationArray.eradicationEffectiveControlADocumentation = tempHolder;
            }else if(fieldLocation === "#eradication_EffectiveControlAControlMethodDescription"){ eradicationArray.eradicationEffectiveControlAControlMethodDescription = tempHolder;
            }else if(fieldLocation === "#eradication_EffectiveControlB_documentation"){ eradicationArray.eradicationEffectiveControlBDocumentation = tempHolder;
            }else if(fieldLocation === "#eradication_NontargetImpacts_documentation"){ eradicationArray.eradicationNontargetImpactsDocumentation = tempHolder;
            }
            Eradication_Substep_Form_Check(eradicationArray);
        });
    };
    // 8 -  Function - Add_Event_To_Nav(destinationArray)            \\
    function Add_Event_To_Nav(destinationArray){
        $('#content_nav_forward').click(function(){
            if(destinationArray.forward !== "none"){
                if($('#content_nav_forward').hasClass('content_nav_base_active')){
                    Eradication_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.forward);
                }
            }
        });
        $('#content_nav_back').click(function(){
            if(destinationArray.back !== "none"){
                if($('#content_nav_back').hasClass('content_nav_base_active')){
                    Eradication_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.back);
                }
            }
        });
        $('#content_step_strategy_exploration_eradication_substep_one').click(function(){
            if(destinationArray.substep_one !== "none"){
                if($('#content_step_strategy_exploration_eradication_substep_one').hasClass('content_substep_available')){
                    Eradication_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_one);
                }
            }
        });
        $('#content_step_strategy_exploration_eradication_substep_two').click(function(){
            if(destinationArray.substep_two !== "none"){
                if($('#content_step_strategy_exploration_eradication_substep_two').hasClass('content_substep_available')){
                    Eradication_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_two);
                }
            }
        });
        $('#content_step_strategy_exploration_eradication_substep_three').click(function(){
            if(destinationArray.substep_three !== "none"){
                if($('#content_step_strategy_exploration_eradication_substep_three').hasClass('content_substep_available')){
                    Eradication_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_three);
                }
            }
        });
        $('#content_step_strategy_exploration_eradication_substep_four').click(function(){
            if(destinationArray.substep_four !== "none"){
                if($('#content_step_strategy_exploration_eradication_substep_four').hasClass('content_substep_available')){
                    Eradication_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_four);
                }
            }
        });
        $('#content_step_strategy_exploration_eradication_substep_five').click(function(){
            if(destinationArray.substep_five !== "none"){
                if($('#content_step_strategy_exploration_eradication_substep_five').hasClass('content_substep_available')){
                    Eradication_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_five);
                }
            }
        });
        $('#content_step_strategy_exploration_eradication_substep_six').click(function(){
            if(destinationArray.substep_six !== "none"){
                if($('#content_step_strategy_exploration_eradication_substep_six').hasClass('content_substep_available')){
                    Eradication_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_six);
                }
            }
        });
        $('#content_step_strategy_exploration_eradication_substep_seven').click(function(){
            if(destinationArray.substep_seven !== "none"){
                if($('#content_step_strategy_exploration_eradication_substep_seven').hasClass('content_substep_available')){
                    Eradication_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_seven);
                }
            }
        });
        $('#content_step_strategy_exploration_eradication_substep_eight').click(function(){
            if(destinationArray.substep_eight !== "none"){
                if($('#content_step_strategy_exploration_eradication_substep_eight').hasClass('content_substep_available')){
                    Eradication_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_eight);
                }
            }
        });
        $('#content_step_strategy_exploration_eradication_substep_nine').click(function(){
            if(destinationArray.substep_nine !== "none"){
                if($('#content_step_strategy_exploration_eradication_substep_nine').hasClass('content_substep_available')){
                    Eradication_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_nine);
                }
            }
        });
        $('#content_progress_bar_project_background').click(function(){
            if(destinationArray.projectBackground !== "none"){
                if($('#content_progress_bar_project_background').hasClass('progress_bar_available')){
                    Eradication_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.projectBackground);
                }
            }
        });
        $('#content_progress_bar_strategy_selection').click(function(){
            if(destinationArray.strategySelection !== "none"){
                if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_available')){
                    Eradication_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.strategySelection);
                }
            }
        });
        $('#content_progress_bar_strategy_exploration').click(function(){
            if(destinationArray.strategyExploration !== "none"){
                if($('#content_progress_bar_strategy_exploration').hasClass('progress_bar_available')){
                    Eradication_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.strategyExploration);
                }
            }
        });
    };
    // 9 -  Populate/Execute - Add_Event_To_Field, Add_Event_To_Nav  \\
    Eradication_Substep_Form_Check(eradicationArray);
    destinationArray = {
        current: '',
        forward: '',
        back: '',
        substep_one: '3.1',
        substep_two: '3.2',
        substep_three: '3.3',
        substep_four: '3.4',
        substep_five: '3.5',
        substep_six: '3.6',
        substep_seven: '3.7',
        substep_eight: '3.8',
        substep_nine: '3.9',
        projectBackground: '1.1',
        strategySelection: '2.1',
        strategyExploration: 'none'
    };
    switch(currentStep){
        case "3.1":
            Add_Event_To_Field('#eradication_SocialPoliticalA_documentation');
            $('#eradication_SocialPoliticalA_yes').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalA_yes'); });
            $('#eradication_SocialPoliticalA_no').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalA_no'); });
            $('#eradication_SocialPoliticalA_uncertain').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalA_uncertain'); });
            // Determine where back will point to
            var tempBack;
            switch(cookieData.strategySelectionAbundanceAndDistributionConfirm){
                case "yes":
                    tempBack = '2.3';
                    break;
                case "no":
                    tempBack = '2.4';
                    break;
            }
            destinationArray.back = tempBack;
            destinationArray.current = '3.1';
            destinationArray.forward = '3.2';
            destinationArray.substep_one = 'none';
            break;
        case "3.2":
            Add_Event_To_Field('#eradication_SocialPoliticalB_documentation');
            $('#eradication_SocialPoliticalB_yes').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalB_yes'); });
            $('#eradication_SocialPoliticalB_no').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalB_no'); });
            $('#eradication_SocialPoliticalB_uncertain').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalB_uncertain'); });
            destinationArray.back = '3.1';
            destinationArray.current = '3.2';
            destinationArray.forward = '3.3';
            destinationArray.substep_two = 'none';
            break;
        case "3.3":
            Add_Event_To_Field('#eradication_SocialPoliticalC_documentation');
            $('#eradication_SocialPoliticalC_yes').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalC_yes'); });
            $('#eradication_SocialPoliticalC_no').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalC_no'); });
            $('#eradication_SocialPoliticalC_uncertain').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalC_uncertain'); });
            destinationArray.back = '3.2';
            destinationArray.current = '3.3';
            destinationArray.forward = '3.4';
            destinationArray.substep_three = 'none';
            break;
        case "3.4":
            Add_Event_To_Field('#eradication_PreventingReproductionA_documentation');
            $('#eradication_PreventingReproductionA_yes').change(function(){ Eradication_Check_Boxes('#eradication_PreventingReproductionA_yes'); });
            $('#eradication_PreventingReproductionA_no').change(function(){ Eradication_Check_Boxes('#eradication_PreventingReproductionA_no'); });
            $('#eradication_PreventingReproductionA_uncertain').change(function(){ Eradication_Check_Boxes('#eradication_PreventingReproductionA_uncertain'); });
            destinationArray.back = '3.3';
            destinationArray.current = '3.4';
            destinationArray.forward = '3.5';
            destinationArray.substep_four = 'none';
            break;
        case "3.5":
            Add_Event_To_Field('#eradication_PreventingReproductionB_documentation');
            $('#eradication_PreventingReproductionB_yes').change(function(){ Eradication_Check_Boxes('#eradication_PreventingReproductionB_yes'); });
            $('#eradication_PreventingReproductionB_no').change(function(){ Eradication_Check_Boxes('#eradication_PreventingReproductionB_no'); });
            $('#eradication_PreventingReproductionB_uncertain').change(function(){ Eradication_Check_Boxes('#eradication_PreventingReproductionB_uncertain'); });
            destinationArray.back = '3.4';
            destinationArray.current = '3.5';
            destinationArray.forward = '3.6';
            destinationArray.substep_five = 'none';
            break;
        case "3.6":
            Add_Event_To_Field('#eradication_Detection_documentation');
            $('#eradication_Detection_yes').change(function(){ Eradication_Check_Boxes('#eradication_Detection_yes'); });
            $('#eradication_Detection_no').change(function(){ Eradication_Check_Boxes('#eradication_Detection_no'); });
            $('#eradication_Detection_uncertain').change(function(){ Eradication_Check_Boxes('#eradication_Detection_uncertain'); });
            destinationArray.back = '3.5';
            destinationArray.current = '3.6';
            destinationArray.forward = '3.7';
            destinationArray.substep_six = 'none';
            break;
        case "3.7":
            Add_Event_To_Field('#eradication_EffectiveControlA_documentation');
            Add_Event_To_Field('#eradication_EffectiveControlAControlMethodDescription');
            $('#eradication_EffectiveControlA_yes').change(function(){ Eradication_Check_Boxes('#eradication_EffectiveControlA_yes'); });
            $('#eradication_EffectiveControlA_no').change(function(){ Eradication_Check_Boxes('#eradication_EffectiveControlA_no'); });
            $('#eradication_EffectiveControlA_uncertain').change(function(){ Eradication_Check_Boxes('#eradication_EffectiveControlA_uncertain'); });
            $('#eradication_EffectiveControlAControlMethod_manual').change(function(){ Eradication_Check_Boxes('#eradication_EffectiveControlAControlMethod_manual'); });
            $('#eradication_EffectiveControlAControlMethod_mechanical').change(function(){ Eradication_Check_Boxes('#eradication_EffectiveControlAControlMethod_mechanical'); });
            $('#eradication_EffectiveControlAControlMethod_herbicide').change(function(){ Eradication_Check_Boxes('#eradication_EffectiveControlAControlMethod_herbicide'); });
            $('#eradication_EffectiveControlAControlMethod_biological').change(function(){ Eradication_Check_Boxes('#eradication_EffectiveControlAControlMethod_biological'); });
            $('#eradication_EffectiveControlAControlMethod_other').change(function(){ Eradication_Check_Boxes('#eradication_EffectiveControlAControlMethod_other'); });
            destinationArray.back = '3.6';
            destinationArray.current = '3.7';
            destinationArray.forward = '3.8';
            destinationArray.substep_seven = 'none';
            break;
        case "3.8":
            Add_Event_To_Field('#eradication_EffectiveControlB_documentation');
            $('#eradication_EffectiveControlB_yes').change(function(){ Eradication_Check_Boxes('#eradication_EffectiveControlB_yes'); });
            $('#eradication_EffectiveControlB_no').change(function(){ Eradication_Check_Boxes('#eradication_EffectiveControlB_no'); });
            $('#eradication_EffectiveControlB_uncertain').change(function(){ Eradication_Check_Boxes('#eradication_EffectiveControlB_uncertain'); });
            destinationArray.back = '3.7';
            destinationArray.current = '3.8';
            destinationArray.forward = '3.9';
            destinationArray.substep_eight = 'none';
            break;
        case "3.9":
            Add_Event_To_Field('#eradication_NontargetImpacts_documentation');
            $('#eradication_NontargetImpacts_yes').change(function(){ Eradication_Check_Boxes('#eradication_NontargetImpacts_yes'); });
            $('#eradication_NontargetImpacts_no').change(function(){ Eradication_Check_Boxes('#eradication_NontargetImpacts_no'); });
            $('#eradication_NontargetImpacts_uncertain').change(function(){ Eradication_Check_Bxoes('#eradication_NontargetImpacts_uncertain'); });
            destinationArray.back = '3.8';
            destinationArray.current = '3.9';
            destinationArray.forward = 'none';
            destinationArray.substep_eight = 'none';
            break;
    }
    Add_Event_To_Nav(destinationArray);
};
