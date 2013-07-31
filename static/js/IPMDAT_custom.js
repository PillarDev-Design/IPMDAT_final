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
            // PROJECT BACKGROUND (STEP 1)
            projectBackground: {
                Assessors: null,
                AssessorsDate: null,
                ScientificName: null,
                CommonName: null,
                Scale: null,
                PRISMWMA: null,
                ConservationTargetImpacted: null,
                ProjectAreaName: null,
                ProjectAreaSize: null,
                PropertyOwners: null,
                ProjectState: null,
                ProjectCounty: null,
                ProjectCoordX: null,
                ProjectCoordY: null,
                ProjectCoordSystem: null,
                ProjectGoal: null,
                NumberOfYearsToComplete: null,
                StartDate: null,
                EndDate: null,
                OngoingProject: null,
                ControlRequired: null,
                GrossInvadedArea: null,
                NetInvadedArea: null,
                NumberOfOccurances: null,
                ImapShareResults: null,
                ImapAccount: null
            },
            // STRATEGY SELECTION (STEP 2)
            strategySelection: {
                NYSScore: null,
                Checkbox: null,
                Documentation: null,
                AbundanceAndDistributionCheckbox: null,
                AbundanceAndDistributionDocumentation: null,
                AbundanceAndDistributionConfirm: null,
                AbundanceAndDistributionAlternative: null,
                AbundanceAndDistributionAlternativeDocumentation: null
            },
            // STRATEGY EXPLORATION (ERADICATION) (STEP 3)
            eradication: {
                SocialPoliticalA: null,
                SocialPoliticalADocumentation: null,
                SocialPoliticalB: null,
                SocialPoliticalBDocumentation: null,
                SocialPoliticalC: null,
                SocialPoliticalCDocumentation: null,
                PreventingReproductionA: null,
                PreventingReproductionADocumentation: null,
                PreventingReproductionB: null,
                PreventingReproductionBDocumentation: null,
                Detection: null,
                DetectionDocumentation: null,
                EffectiveControlA: null,
                EffectiveControlADocumentation: null,
                EffectiveControlAControlMethod: null,
                EffectiveControlAControlMethodDescription: null,
                EffectiveControlB: null,
                EffectiveControlBDocumentation: null,
                NontargetImpacts: null,
                NontargetImpactsDocumentation: null
            },
            // STRATEGY EXPLORATION (CONTAINMENT) (STEP 4)
            containment: {
                SocialPoliticalA: null,
                SocialPoliticalADocumentation: null,
                SocialPoliticalB: null,
                SocialPoliticalBDocumentation: null,
                PreventingReproductionA: null,
                PreventingReproductionADocumentation: null,
                PreventingReproductionB: null,
                PreventingReproductionBDocumentation: null,
                DetectingSmall: null,
                DetectingSmallDocumentation: null,
                EffectiveControlA: null,
                EffectiveControlADocumentation: null,
                EffectiveControlAControlMethod: null,
                EffectiveControlAControlMethodDescription: null,
                EffectiveControlB: null,
                EffectiveControlBDocumentation: null,
                NontargetImpacts: null,
                NontargetImpactsDocumentation: null
            },
            // STRATEGY EXPLORATION (SUPPRESSION) (STEP 5)
            suppression: {
                SocialPoliticalA: null,
                SocialPoliticalADocumentation: null,
                SocialPoliticalB: null,
                SocialPoliticalBDocumentation: null,
                EffectiveControlA: null,
                EffectiveControlADocumentation: null,
                EffectiveControlAControlMethod: null,
                EffectiveControlAControlMethodDescription: null,
                EffectiveControlB: null,
                EffectiveControlBDocumentation: null,
                NontargetImpacts: null,
                NontargetImpactsDocumentation: null
            }
        };
    /*===============================================================*\
     * This next chunk of code ensures that any previous data will   *
     * not be overwritten when we write to the cookie. It's          *
     * completely hardcoded, but it does the job. In the future I'll *
     * devise some way to optimize this.                             *
    \*===============================================================*/
    // Recall Saved Data from savedData
    // 1.1
    if(savedData.projectBackground.Assessors !== null){ cookieArray.projectBackground.Assessors = savedData.projectBackground.Assessors; }
    if(savedData.projectBackground.AssessorsDate !== null){ cookieArray.projectBackground.AssessorsDate = savedData.projectBackground.AssessorsDate; }
    if(savedData.projectBackground.ScientificName !== null){ cookieArray.projectBackground.ScientificName = savedData.projectBackground.ScientificName; }
    if(savedData.projectBackground.CommonName !== null){ cookieArray.projectBackground.CommonName = savedData.projectBackground.CommonName; }
    if(savedData.projectBackground.Scale !== null){ cookieArray.projectBackground.Scale = savedData.projectBackground.Scale; }
    if(savedData.projectBackground.PRISMWMA !== null){ cookieArray.projectBackground.PRISMWMA = savedData.projectBackground.PRISMWMA; }
    if(savedData.projectBackground.ConservationTargetImpacted !== null){ cookieArray.projectBackground.ConservationTargetImpacted = savedData.projectBackground.ConservationTargetImpacted; }
    if(savedData.projectBackground.ProjectAreaName !== null){ cookieArray.projectBackground.ProjectAreaName = savedData.projectBackground.ProjectAreaName; }
    if(savedData.projectBackground.ProjectAreaSize !== null){ cookieArray.projectBackground.ProjectAreaSize = savedData.projectBackground.ProjectAreaSize; }
    if(savedData.projectBackground.PropertyOwners !== null){ cookieArray.projectBackground.PropertyOwners = savedData.projectBackground.PropertyOwners; }
    if(savedData.projectBackground.ProjectState !== null){ cookieArray.projectBackground.ProjectState = savedData.projectBackground.ProjectState; }
    if(savedData.projectBackground.ProjectCounty !== null){ cookieArray.projectBackground.ProjectCounty = savedData.projectBackground.ProjectCounty; }
    if(savedData.projectBackground.ProjectCoordX !== null){ cookieArray.projectBackground.ProjectCoordX = savedData.projectBackground.ProjectCoordX; }
    if(savedData.projectBackground.ProjectCoordY !== null){ cookieArray.projectBackground.ProjectCoordY = savedData.projectBackground.ProjectCoordY; }
    if(savedData.projectBackground.ProjectCoordSystem !== null){ cookieArray.projectBackground.ProjectCoordSystem = savedData.projectBackground.ProjectCoordSystem; }
    // 1.2
    if(savedData.projectBackground.ProjectGoal !== null){ cookieArray.projectBackground.ProjectGoal = savedData.projectBackground.ProjectGoal; }
    if(savedData.projectBackground.NumberOfYearsToCompleted !== null){ cookieArray.projectBackground.NumberOfYearsToComplete = savedData.projectBackground.NumberOfYearsToComplete; }
    if(savedData.projectBackground.StartDate !== null){ cookieArray.projectBackground.StartDate = savedData.projectBackground.StartDate; }
    if(savedData.projectBackground.EndDate !== null){ cookieArray.projectBackground.EndDate = savedData.projectBackground.EndDate; }
    if(savedData.projectBackground.OngoingProject !== null){ cookieArray.projectBackground.OngoingProject = savedData.projectBackground.OngoingProject; }
    if(savedData.projectBackground.ControlRequired !== null){ cookieArray.projectBackground.ControlRequired = savedData.projectBackground.ControlRequired; }
    // 1.3
    if(savedData.projectBackground.GrossInvadedArea !== null){ cookieArray.projectBackground.GrossInvadedArea = savedData.projectBackground.GrossInvadedArea; }
    if(savedData.projectBackground.NetInvadedArea !== null){ cookieArray.projectBackground.NetInvadedArea = savedData.projectBackground.NetInvadedArea; }
    if(savedData.projectBackground.NumberOfOccurances !== null){ cookieArray.projectBackground.NumberOfOccurances = savedData.projectBackground.NumberOfOccurances; }
    // 1.4
    if(savedData.projectBackground.ImapShareResults !== null){ cookieArray.projectBackground.ImapShareResults = savedData.projectBackground.ImapShareResults; }
    if(savedData.projectBackground.ImapAccount !== null){ cookieArray.projectBackground.ImapAccount = savedData.projectBackground.ImapAccount; }
    // 2.1
    if(savedData.strategySelection.NYSScore !== null){ cookieArray.strategySelection.NYSScore = savedData.strategySelection.NYSScore; }
    if(savedData.strategySelection.Checkbox !== null){ cookieArray.strategySelection.Checkbox = savedData.strategySelection.Checkbox; }
    if(savedData.strategySelection.Documentation !== null){ cookieArray.strategySelection.Documentation = savedData.strategySelection.Documentation; }
    // 2.2
    if(savedData.strategySelection.AbundanceAndDistributionCheckbox !== null){ cookieArray.strategySelection.AbundanceAndDistributionCheckbox = savedData.strategySelection.AbundanceAndDistributionCheckbox; }
    if(savedData.strategySelection.AbundanceAndDistributionDocumentation !== null){ cookieArray.strategySelection.AbundanceAndDistributionDocumentation = savedData.strategySelection.AbundanceAndDistributionDocumentation; }
    // 2.3
    if(savedData.strategySelection.AbundanceAndDistributionConfirm !== null){ cookieArray.strategySelection.AbundanceAndDistributionConfirm = savedData.strategySelection.AbundanceAndDistributionConfirm; }
    // 2.4
    if(savedData.strategySelection.AbundanceAndDistributionAlternative !== null){ cookieArray.strategySelection.AbundanceAndDistributionAlternative = savedData.strategySelection.AbundanceAndDistributionAlternative; }
    if(savedData.strategySelection.AbundanceAndDistributionAlternativeDocumentation !== null){ cookieArray.strategySelection.AbundanceAndDistributionAlternativeDocumentation = savedData.strategySelection.AbundanceAndDistributionAlternativeDocumentation; }
    // 3.1
    if(savedData.eradication.SocialPoliticalA !== null){ cookieArray.eradication.SocialPoliticalA = savedData.eradication.SocialPoliticalA; }
    if(savedData.eradication.SocialPoliticalADocumentation !== null){ cookieArray.eradication.SocialPoliticalADocumentation = savedData.eradication.SocialPoliticalADocumentation; }
    // 3.2
    if(savedData.eradication.SocialPoliticalB !== null){ cookieArray.eradication.SocialPoliticalB = savedData.eradication.SocialPoliticalB; }
    if(savedData.eradication.SocialPoliticalBDocumentation !== null){ cookieArray.eradication.SocialPoliticalBDocumentation = savedData.eradication.SocialPoliticalBDocumentation; }
    // 3.3
    if(savedData.eradication.SocialPoliticalC !== null){ cookieArray.eradication.SocialPoliticalC = savedData.eradication.SocialPoliticalC; }
    if(savedData.eradication.SocialPoliticalCDocumentation !== null){ cookieArray.eradication.SocialPoliticalCDocumentation = savedData.eradication.SocialPoliticalCDocumentation; }
    // 3.4
    if(savedData.eradication.PreventingReproductionA !== null){ cookieArray.eradication.PreventingReproductionA = savedData.eradication.PreventingReproductionA; }
    if(savedData.eradication.PreventingReproductionADocumentation !== null){ cookieArray.eradication.PreventingReproductionADocumentation = savedData.eradication.PreventingReproductionADocumentation; }
    // 3.5
    if(savedData.eradication.PreventingReproductionB !== null){ cookieArray.eradication.PreventingReproductionB = savedData.eradication.PreventingReproductionB; }
    if(savedData.eradication.PreventingReproductionBDocumentation !== null){ cookieArray.eradication.PreventingReproductionBDocumentation = savedData.eradication.PreventingReproductionBDocumentation; }
    // 3.6
    if(savedData.eradication.Detection !== null){ cookieArray.eradication.Detection = savedData.eradication.Detection; }
    if(savedData.eradication.DetectionDocumentation !== null){ cookieArray.eradication.DetectionDocumentation = savedData.eradication.DetectionDocumentation; }
    // 3.7
    if(savedData.eradication.EffectiveControlA !== null){ cookieArray.eradication.EffectiveControlA = savedData.eradication.EffectiveControlA; }
    if(savedData.eradication.EffectiveControlADocumentation !== null){ cookieArray.eradication.EffectiveControlADocumentation = savedData.eradication.EffectiveControlADocumentation; }
    if(savedData.eradication.EffectiveControlAControlMethod !== null){ cookieArray.eradication.EffectiveControlAControlMethod = savedData.eradication.EffectiveControlAControlMethod; }
    if(savedData.eradication.EffectiveControlAControlMethodDescription !== null){ cookieArray.eradication.EffectiveControlAControlMethodDescription = savedData.eradication.EffectiveControlAControlMethodDescription; }
    // 3.8
    if(savedData.eradication.EffectiveControlB !== null){ cookieArray.eradication.EffectiveControlB = savedData.eradication.EffectiveControlB; }
    if(savedData.eradication.EffectiveControlBDocumentation !== null){ cookieArray.eradication.EffectiveControlBDocumentation = savedData.eradication.EffectiveControlBDocumentation; }
    // 3.9
    if(savedData.eradication.NontargetImpacts !== null){ cookieArray.eradication.NontargetImpacts = savedData.eradication.NontargetImpacts; }
    if(savedData.eradication.NontargetImpactsDocumentation !== null){ cookieArray.eradication.NontargetImpactsDocumentation = savedData.eradication.NontargetImpactsDocumentation; }
    // 4.1
    if(savedData.containment.SocialPoliticalA !== null){ cookieArray.containment.SocialPoliticalA = savedData.containment.SocialPoliticalA; }
    if(savedData.containment.SocialPoliticalADocumentation !== null){ cookieArray.containment.SocialPoliticalADocumentation = savedData.containment.SocialPoliticalADocumentation; }
    // 4.2
    if(savedData.containment.SocialPoliticalB !== null){ cookieArray.containment.SocialPoliticalB = savedData.containment.SocialPoliticalB; }
    if(savedData.containment.SocialPoliticalBDocumentation !== null){ cookieArray.containment.SocialPoliticalBDocumentation = savedData.containment.SocialPoliticalBDocumentation; }
    // 4.3
    if(savedData.containment.PreventingReproductionA !== null){ cookieArray.containment.PreventingReproductionA = savedData.containment.PreventingReproductionA; }
    if(savedData.containment.PreventingReproductionADocumentation !== null){ cookieArray.containment.PreventingReproductionADocumentation = savedData.containment.PreventingReproductionADocumentation; }
    // 4.4
    if(savedData.containment.PreventingReproductionB !== null){ cookieArray.containment.PreventingReproductionB = savedData.containment.PreventingReproductionB; }
    if(savedData.containment.PreventingReproductionBDocumentation !== null){ cookieArray.containment.PreventingReproductionBDocumentation = savedData.containment.PreventingReproductionBDocumentation; }
    // 4.5
    if(savedData.containment.DetectingSmall !== null){ cookieArray.containment.DetectingSmall = savedData.containment.DetectingSmall; }
    if(savedData.containment.DetectingSmallDocumentation !== null){ cookieArray.containment.DetectingSmallDocumentation = savedData.containment.DetectingSmallDocumentation; }
    // 4.6
    if(savedData.containment.EffectiveControlA !== null){ cookieArray.containment.EffectiveControlA = savedData.containment.EffectiveControlA; }
    if(savedData.containment.EffectiveControlADocumentation !== null){ cookieArray.containment.EffectiveControlADocumentation = savedData.containment.EffectiveControlADocumentation; }
    if(savedData.containment.EffectiveControlAControlMethod !== null){ cookieArray.containment.EffectiveControlAControlMethod = savedData.containment.EffectiveControlAControlMethod; }
    if(savedData.containment.EffectiveControlAControlMethodDescription !== null){ cookieArray.containment.EffectiveControlAControlMethodDescription = savedData.containment.EffectiveControlAControlMethodDescription; }
    // 4.7
    if(savedData.containment.EffectiveControlB !== null){ cookieArray.containment.EffectiveControlB = savedData.containment.EffectiveControlB; }
    if(savedData.containment.EffectiveControlBDocumentation !== null){ cookieArray.containment.EffectiveControlBDocumentation = savedData.containment.EffectiveControlBDocumentation; }
    // 4.8
    if(savedData.containment.NontargetImpacts !== null){ cookieArray.containment.NontargetImpacts = savedData.containment.NontargetImpacts; }
    if(savedData.containment.NontargetImpactsDocumentation !== null){ cookieArray.containment.NontargetImpactsDocumentation = savedData.containment.NontargetImpactsDocumentation; }
    // 5.1
    if(savedData.suppression.SocialPoliticalA !== null){ cookieArray.suppression.SocialPoliticalA = savedData.suppression.SocialPoliticalA; }
    if(savedData.suppression.SocialPoliticalADocumentation !== null){ cookieArray.suppression.SocialPoliticalADocumentation = savedData.suppression.SocialPoliticalADocumentation; }
    // 5.2
    if(savedData.suppression.SocialPoliticalB !== null){ cookieArray.suppression.SocialPoliticalB = savedData.suppression.SocialPoliticalB; }
    if(savedData.suppression.SocialPoliticalBDocumentation !== null){ cookieArray.suppression.SocialPoliticalBDocumentation = savedData.suppression.SocialPoliticalBDocumentation; }
    // 5.3
    if(savedData.suppression.EffectiveControlA !== null){ cookieArray.suppression.EffectiveControlA = savedData.suppression.EffectiveControlA; }
    if(savedData.suppression.EffectiveControlADocumentation !== null){ cookieArray.suppression.EffectiveControlADocumentation = savedData.suppression.EffectiveControlADocumentation; }
    if(savedData.suppression.EffectiveControlAControlMethod !== null){ cookieArray.suppression.EffectiveControlAControlMethod = savedData.suppression.EffectiveControlAControlMethod; }
    if(savedData.suppression.EffectiveControlAControlMethodDescription !== null){ cookieArray.suppression.EffectiveControlAControlMethodDescription = savedData.suppression.EffectiveControlAControlMethodDescription; }
    // 5.4
    if(savedData.suppression.EffectiveControlB !== null){ cookieArray.suppression.EffectiveControlB = savedData.suppression.EffectiveControlB; }
    if(savedData.suppression.EffectiveControlBDocumentation !== null){ cookieArray.suppression.EffectiveControlBDocumentation = savedData.suppression.EffectiveControlBDocumentation; }
    // 5.5
    if(savedData.suppression.NontargetImpacts !== null){ cookieArray.suppression.NontargetImpacts = savedData.suppression.NontargetImpacts; }
    if(savedData.suppression.NontargetImpactsDocumentation !== null){ cookieArray.suppression.NontargetImpactsDocumentation = savedData.suppression.NontargetImpactsDocumentation; }

    // Enter New Data from cookieData
    if(stepNumber === "1.1"){
        cookieArray.projectBackground.Assessors = cookieData.projectBackground.Assessors;
        cookieArray.projectBackground.AssessorsDate = cookieData.projectBackground.AssessorsDate;
        cookieArray.projectBackground.ScientificName = cookieData.projectBackground.ScientificName;
        cookieArray.projectBackground.CommonName = cookieData.projectBackground.CommonName;
        cookieArray.projectBackground.Scale = cookieData.projectBackground.Scale;
        cookieArray.projectBackground.PRISMWMA = cookieData.projectBackground.PRISMWMA;
        cookieArray.projectBackground.ConservationTargetImpacted = cookieData.projectBackground.ConservationTargetImpacted;
        cookieArray.projectBackground.ProjectAreaName = cookieData.projectBackground.ProjectAreaName;
        cookieArray.projectBackground.ProjectAreaSize = cookieData.projectBackground.ProjectAreaSize;
        cookieArray.projectBackground.PropertyOwners = cookieData.projectBackground.PropertyOwners;
        cookieArray.projectBackground.ProjectState = cookieData.projectBackground.ProjectState;
        cookieArray.projectBackground.ProjectCounty = cookieData.projectBackground.ProjectCounty;
        cookieArray.projectBackground.ProjectCoordX = cookieData.projectBackground.ProjectCoordX;
        cookieArray.projectBackground.ProjectCoordY = cookieData.projectBackground.ProjectCoordY;
        cookieArray.projectBackground.ProjectCoordSystem = cookieData.projectBackground.ProjectCoordSystem;
    }else if(stepNumber === "1.2"){
        cookieArray.projectBackground.ProjectGoal = cookieData.projectBackground.ProjectGoal;
        cookieArray.projectBackground.NumberOfYearsToComplete = cookieData.projectBackground.NumberOfYearsToComplete;
        cookieArray.projectBackground.StartDate = cookieData.projectBackground.StartDate;
        cookieArray.projectBackground.EndDate = cookieData.projectBackground.EndDate;
        cookieArray.projectBackground.OngoingProject = cookieData.projectBackground.OngoingProject;
        cookieArray.projectBackground.ControlRequired = cookieData.projectBackground.ControlRequired;
    }else if(stepNumber === "1.3"){
        cookieArray.projectBackground.GrossInvadedArea = cookieData.projectBackground.GrossInvadedArea;
        cookieArray.projectBackground.NetInvadedArea = cookieData.projectBackground.NetInvadedArea;
        cookieArray.projectBackground.NumberOfOccurances = cookieData.projectBackground.NumberOfOccurances;
    }else if(stepNumber === "1.4"){
        cookieArray.projectBackground.ImapShareResults = cookieData.projectBackground.ImapShareResults;
        cookieArray.projectBackground.ImapAccount = cookieData.projectBackground.ImapAccount;
    }else if(stepNumber === "2.1"){
        cookieArray.strategySelection.NYSScore = cookieData.strategySelection.NYSScore;
        cookieArray.strategySelection.Checkbox = cookieData.strategySelection.Checkbox;
        cookieArray.strategySelection.Documentation = cookieData.strategySelection.Documentation;
    }else if(stepNumber === "2.2"){
        cookieArray.strategySelection.AbundanceAndDistributionCheckbox = cookieData.strategySelection.AbundanceAndDistributionCheckbox;
        cookieArray.strategySelection.AbundanceAndDistributionDocumentation = cookieData.strategySelection.AbundanceAndDistributionDocumentation;
    }else if(stepNumber === "2.3"){
        cookieArray.strategySelection.AbundanceAndDistributionConfirm = cookieData.strategySelection.AbundanceAndDistributionConfirm;
    }else if(stepNumber === "2.4"){
        cookieArray.strategySelection.AbundanceAndDistributionAlternative = cookieData.strategySelection.AbundanceAndDistributionAlternative;
        cookieArray.strategySelection.AbundanceAndDistributionAlternativeDocumentation = cookieData.strategySelection.AbundanceAndDistributionAlternativeDocumentation;
    }else if(stepNumber === "3.1"){
        cookieArray.eradication.SocialPoliticalA = cookieData.eradication.SocialPoliticalA;
        cookieArray.eradication.SocialPoliticalADocumentation = cookieData.eradication.SocialPoliticalADocumentation;
    }else if(stepNumber === "3.2"){
        cookieArray.eradication.SocialPoliticalB = cookieData.eradication.SocialPoliticalB;
        cookieArray.eradication.SocialPoliticalBDocumentation = cookieData.eradication.SocialPoliticalBDocumentation;
    }else if(stepNumber === "3.3"){
        cookieArray.eradication.SocialPoliticalC = cookieData.eradication.SocialPoliticalC;
        cookieArray.eradication.SocialPoliticalCDocumentation = cookieData.eradication.SocialPoliticalCDocumentation;
    }else if(stepNumber === "3.4"){
        cookieArray.eradication.PreventingReproductionA = cookieData.eradication.PreventingReproductionA;
        cookieArray.eradication.PreventingReproductionADocumentation = cookieData.eradication.PreventingReproductionADocumentation;
    }else if(stepNumber === "3.5"){
        cookieArray.eradication.PreventingReproductionB = cookieData.eradication.PreventingReproductionB;
        cookieArray.eradication.PreventingReproductionBDocumentation = cookieData.eradication.PreventingReproductionBDocumentation;
    }else if(stepNumber === "3.6"){
        cookieArray.eradication.Detection = cookieData.eradication.Detection;
        cookieArray.eradication.DetectionDocumentation = cookieData.eradication.DetectionDocumentation;
    }else if(stepNumber === "3.7"){
        cookieArray.eradication.EffectiveControlA = cookieData.eradication.EffectiveControlA;
        cookieArray.eradication.EffectiveControlADocumentation = cookieData.eradication.EffectiveControlADocumentation;
        cookieArray.eradication.EffectiveControlAControlMethod = cookieData.eradication.EffectiveControlAControlMethod;
        cookieArray.eradication.EffectiveControlAControlMethodDescription = cookieData.eradication.EffectiveControlAControlMethodDescription;
    }else if(stepNumber === "3.8"){
        cookieArray.eradication.EffectiveControlB = cookieData.eradication.EffectiveControlB;
        cookieArray.eradication.EffectiveControlBDocumentation = cookieData.eradication.EffectiveControlBDocumentation;
    }else if(stepNumber === "3.9"){
        cookieArray.eradication.NontargetImpacts = cookieData.eradication.NontargetImpacts;
        cookieArray.eradication.NontargetImpactsDocumentation = cookieData.eradication.NontargetImpactsDocumentation;
    }else if(stepNumber === "4.1"){
        cookieArray.containment.SocialPoliticalA = cookieData.containment.SocialPoliticalA;
        cookieArray.containment.SocialPoliticalADocumentation = cookieData.containment.SocialPoliticalADocumentation;
    }else if(stepNumber === "4.2"){
        cookieArray.containment.SocialPoliticalB = cookieData.containment.SocialPoliticalB;
        cookieArray.containment.SocialPoliticalBDocumentation = cookieData.containment.SocialPoliticalBDocumentation;
    }else if(stepNumber === "4.3"){
        cookieArray.containment.PreventingReproductionA = cookieData.containment.PreventingReproductionA;
        cookieArray.containment.PreventingReproductionADocumentation = cookieData.containment.PreventingReproductionADocumentation;
    }else if(stepNumber === "4.4"){
        cookieArray.containment.PreventingReproductionB = cookieData.containment.PreventingReproductionB;
        cookieArray.containment.PreventingReproductionBDocumentation = cookieData.containment.PreventingReproductionBDocumentation;
    }else if(stepNumber === "4.5"){
        cookieArray.containment.DetectingSmall = cookieData.containment.DetectingSmall;
        cookieArray.containment.DetectingSmallDocumentation = cookieData.containment.DetectingSmallDocumentation;
    }else if(stepNumber === "4.6"){
        cookieArray.containment.EffectiveControlA = cookieData.containment.EffectiveControlA;
        cookieArray.containment.EffectiveControlADocumentation = cookieData.containment.EffectiveControlADocumentation;
        cookieArray.containment.EffectiveControlAControlMethod = cookieData.containment.EffectiveControlAControlMethod;
        cookieArray.containment.EffectiveControlAControlMethodDescription = cookieData.containment.EffectiveControlAControlMethodDescription;
    }else if(stepNumber === "4.7"){
        cookieArray.containment.EffectiveControlB = cookieData.containment.EffectiveControlB;
        cookieArray.containment.EffectiveControlBDocumentation = cookieData.containment.EffectiveControlBDocumentation;
    }else if(stepNumber === "4.8"){
        cookieArray.containment.NontargetImpacts = cookieData.containment.NontargetImpacts;
        cookieArray.containment.NontargetImpactsDocumentation = cookieData.containment.NontargetImpactsDocumentation;
    }else if(stepNumber === "5.1"){
        cookieArray.suppression.SocialPoliticalA = cookieData.suppression.SocialPoliticalA;
        cookieArray.suppression.SocialPoliticalADocumentation = cookieData.suppression.SocialPoliticalADocumentation;
    }else if(stepNumber === "5.2"){
        cookieArray.suppression.SocialPoliticalB = cookieData.suppression.SocialPoliticalB;
        cookieArray.suppression.SocialPoliticalBDocumentation = cookieData.suppression.SocialPoliticalBDocumentation;
    }else if(stepNumber === "5.3"){
        cookieArray.suppression.EffectiveControlA = cookieData.suppression.EffectiveControlA;
        cookieArray.suppression.EffectiveControlADocumentation = cookieData.suppression.EffectiveControlADocumentation;
        cookieArray.suppression.EffectiveControlAControlMethod = cookieData.suppression.EffectiveControlAControlMethod;
        cookieArray.suppression.EffectiveControlAControlMethodDescription = cookieData.suppression.EffectiveControlAControlMethodDescription;
    }else if(stepNumber === "5.4"){
        cookieArray.suppression.EffectiveControlB = cookieData.suppression.EffectiveControlB;
        cookieArray.suppression.EffectiveControlBDocumentation = cookieData.suppression.EffectiveControlBDocumentation;
    }else if(stepNumber === "5.5"){
        cookieArray.suppression.NontargetImpacts = cookieData.suppression.NontargetImpacts;
        cookieArray.suppression.NontargetImpactsDocumentation = cookieData.suppression.NontargetImpactsDocumentation;
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
    $('#content_step_strategy_exploration_containment_substep_one').unbind('click');
    $('#content_step_strategy_exploration_containment_substep_two').unbind('click');
    $('#content_step_strategy_exploration_containment_substep_three').unbind('click');
    $('#content_step_strategy_exploration_containment_substep_four').unbind('click');
    $('#content_step_strategy_exploration_containment_substep_five').unbind('click');
    $('#content_step_strategy_exploration_containment_substep_six').unbind('click');
    $('#content_step_strategy_exploration_containment_substep_seven').unbind('click');
    $('#content_step_strategy_exploration_containment_substep_eight').unbind('click');
    $('#content_step_strategy_exploration_suppression_substep_one').unbind('click');
    $('#content_step_strategy_exploration_suppression_substep_two').unbind('click');
    $('#content_step_strategy_exploration_suppression_substep_three').unbind('click');
    $('#content_step_strategy_exploration_suppression_substep_four').unbind('click');
    $('#content_step_strategy_exploration_suppression_substep_five').unbind('click');
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
            if(cookieData.strategySelection.AbundanceAndDistributionConfirm === "#strategy_confirmation_yes"){
                // Confirm
                $('#content_progress_bar_strategy_exploration').removeClass('progress_bar_active').removeClass('progress_bar_inactive').addClass('progress_bar_available');
                // TODO: FIX PATHING HERE -> ERADICATION OR CONTAINMENT
                $('#content_step_strategy_exploration_eradication_substep_one').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
                $('#content_step_strategy_exploration_containment_substep_one').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
                $('#content_step_strategy_exploration_suppression_substep_one').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
            }else if(cookieData.strategySelection.AbundanceAndDistributionConfirm === "#strategy_confirmation_no"){
                // Alternative
                $('#content_step_strategy_selection_substep_four').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
            }
            $('#strategy_confirmation_yes').prop('disabled', true);
            $('#strategy_confirmation_no').prop('disabled', true);
        }
        if(completedSteps[i] === "2.4"){
            $('#content_progress_bar_strategy_exploration').removeClass('progress_bar_active').removeClass('progress_bar_inactive').addClass('progress_bar_available');
            // TODO: FIX PATHING HERE -> ERADICATION OR CONTAINMENT
            $('#content_step_strategy_exploration_eradication_substep_one').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
            $('#content_step_strategy_exploration_containment_substep_one').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
            $('#content_step_strategy_exploration_suppression_substep_one').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
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
        if(completedSteps[i] === "4.1"){
            $('#content_step_strategy_exploration_containment_substep_two').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "4.2"){
            $('#content_step_strategy_exploration_containment_substep_three').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "4.3"){
            $('#content_step_strategy_exploration_containment_substep_four').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "4.4"){
            $('#content_step_strategy_exploration_containment_substep_five').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "4.5"){
            $('#content_step_strategy_exploration_containment_substep_six').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "4.6"){
            $('#content_step_strategy_exploration_containment_substep_seven').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "4.7"){
            $('#content_step_strategy_exploration_containment_substep_eight').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "4.8"){
            // TODO: UPDATE HERE (TO BE DETERMINED)
        }
        if(completedSteps[i] === "5.1"){
            $('#content_step_strategy_exploration_suppression_substep_two').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "5.2"){
            $('#content_step_strategy_exploration_suppression_substep_three').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "5.3"){
            $('#content_step_strategy_exploration_suppression_substep_four').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "5.4"){
            $('#content_step_strategy_exploration_suppression_substep_five').removeClass('content_substep_active').removeClass('content_substep_inactive').addClass('content_substep_available');
        }
        if(completedSteps[i] === "5.5"){
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
    // STRATEGY EXPLORATION (CONTAINMENT)
    if($('#content_step_strategy_exploration_containment_SocialPoliticalA').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_containment_SocialPoliticalA').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_exploration_containment_SocialPoliticalB').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_containment_SocialPoliticalB').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_exploration_containment_PreventingReproductionA').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_containment_PreventingReproductionA').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_exploration_containment_PreventingReproductionB').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_containment_PreventingReproductionB').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_exploration_containment_DetectingSmall').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_containment_DetectingSmall').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_exploration_containment_EffectiveControlA').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_containment_EffectiveControlA').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_exploration_containment_EffectiveControlB').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_containment_EffectiveControlB').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_strategy_exploration_containment_NontargetImpacts').hasClass('content_step_active')){
        $('#content_step_strategy_exploration_containment_NontargetImpacts').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_substep_strategy_exploration_containment_container').hasClass('content_substep_container_active')){
        $('#content_substep_strategy_exploration_containment_container').removeClass('content_substep_container_active').addClass('content_substep_container_inactive');
    }
    // STRATEGY EXPLORATION (SUPPRESSION)
    $('#content_step_strategy_exploration_suppression_SocialPoliticalA').removeClass('content_step_active').addClass('content_step_inactive');
    $('#content_step_strategy_exploration_suppression_SocialPoliticalB').removeClass('content_step_active').addClass('content_step_inactive');
    $('#content_step_strategy_exploration_suppression_EffectiveControlA').removeClass('content_step_active').addClass('content_step_inactive');
    $('#content_step_strategy_exploration_suppression_EffectiveControlB').removeClass('content_step_active').addClass('content_step_inactive');
    $('#content_step_strategy_exploration_suppression_NontargetImpacts').removeClass('content_step_active').addClass('content_step_inactive');
    $('#content_substep_strategy_exploration_suppression_container').removeClass('content_substep_container_active').addClass('content_substep_container_inactive');

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
            $('#eradication_EffectiveControlA_yes').prop('checked', false);
            $('#eradication_EffectiveControlA_no').prop('checked', false);
            $('#eradication_EffectiveControlA_uncertain').prop('checked', false);
            $('#eradication_EffectiveControlA_documentation').prop('value', "");
            $('#eradication_EffectiveControlAControlMethod_manual').prop('checked', false);
            $('#eradication_EffectiveControlAControlMethod_mechancial').prop('checked', false);
            $('#eradication_EffectiveControlAControlMethod_herbicide').prop('checked', false);
            $('#eradication_EffectiveControlAControlMethod_biological').prop('checked', false);
            $('#eradication_EffectiveControlAControlMethod_other').prop('checked', false);
            $('#eradication_EffectiveControlAControlMethodDescription').prop('value', "");
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
            $('#eradication_EffectiveControlB_yes').prop('checked', false);
            $('#eradication_EffectiveControlB_no').prop('checked', false);
            $('#eradication_EffectiveControlB_uncertain').prop('checked', false);
            $('#eradication_EffectiveControlB_documentation').prop('value', "");
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
            $('#eradication_NontargetImpacts_yes').prop('checked', false);
            $('#eradication_NontargetImpacts_no').prop('checked', false);
            $('#eradication_NontargetImpacts_uncertain').prop('checked', false);
            $('#eradication_NontargetImpacts_documentation').prop('value', "");
        }
        // Execute Step Function
        JSON_Cookie_Step_Strategy_Exploration_Eradication(cookieData, completedSteps, currentStep);
    }else if((currentStep === "4.1")||(currentStep === "4.2")||(currentStep === "4.3")||(currentStep === "4.4")||(currentStep === "4.5")||(currentStep ==="4.6")||(currentStep === "4.7")||(currentStep === "4.8")){
        // Main Progress Bars
        $('#content_progress_bar_strategy_exploration').removeClass('progress_bar_inactive').removeClass('progress_bar_available').addClass('progress_bar_active');
        // Substep Progress Container
        $('#content_substep_strategy_exploration_containment_container').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
        
        // SubStep Progress Bars & Clear Questions
        switch(currentStep){
            case "4.1":
                // Substep Progress Bar
                $('#content_step_strategy_exploration_containment_substep_one').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
                // Clear Questions
                $('#containment_SocialPoliticalA_yes').prop('checked', false);
                $('#containment_SocialPoliticalA_no').prop('checked', false);
                $('#containment_SocialPoliticalA_uncertain').prop('checked', false);
                $('#containment_SocialPoliticalA_documentation').prop('value', "");
                break;
            case "4.2":
                // Substep Progress Bar
                $('#content_step_strategy_exploration_containment_substep_two').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
                // Clear Questions
                $('#containment_SocialPoliticalB_yes').prop('checked', false);
                $('#containment_SocialPoliticalB_no').prop('checked', false);
                $('#containment_SocialPoliticalB_uncertain').prop('checked', false);
                $('#containment_SocialPoliticalB_documentation').prop('value', "");
                break;
            case "4.3":
                // Substep Progress Bar
                $('#content_step_strategy_exploration_containment_substep_three').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
                // Clear Questions
                $('#containment_PreventingReproductionA_yes').prop('checked', false);
                $('#containment_PreventingReproductionA_no').prop('checked', false);
                $('#containment_PreventingReproductionA_uncertain').prop('checked', false);
                $('#containment_PreventingReproductionA_documentation').prop('value', "");
                break;
            case "4.4":
                // Substep Progress Bar
                $('#content_step_strategy_exploration_containment_substep_four').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
                // Clear Questions
                $('#containment_PreventingReproductionB_yes').prop('checked', false);
                $('#containment_PreventingReproductionB_no').prop('checked', false);
                $('#containment_PreventingReproductionB_uncertain').prop('checked', false);
                $('#containment_PreventingReproductionB_documentation').prop('value', "");
                break;
            case "4.5":
                // Substep Progress Bar
                $('#content_step_strategy_exploration_containment_substep_five').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
                // Clear Questions
                $('#containment_DetectingSmall_yes').prop('checked', false);
                $('#containment_DetectingSmall_no').prop('checked', false);
                $('#containment_DetectingSmall_uncertain').prop('checked', false);
                $('#containment_DetectingSmall_documentation').prop('value', "");
                break;
            case "4.6":
                // Substep Progress Bar
                $('#content_step_strategy_exploration_containment_substep_six').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
                // Clear Questions
                $('#containment_EffectiveControlA_yes').prop('checked', false);
                $('#containment_EffectiveControlA_no').prop('checked', false);
                $('#containment_EffectiveControlA_uncertain').prop('checked', false);
                $('#containment_EffectiveControlA_documentation').prop('value', "");
                $('#containment_EffectiveControlAControlMethod_manual').prop('checked', false);
                $('#containment_EffectiveControlAControlMethod_mechancial').prop('checked', false);
                $('#containment_EffectiveControlAControlMethod_herbicide').prop('checked', false);
                $('#containment_EffectiveControlAControlMethod_biological').prop('checked', false);
                $('#containment_EffectiveControlAControlMethod_other').prop('checked', false);
                $('#containment_EffectiveControlAControlMethodDescription').prop('value', "");
                break;
            case "4.7":
                // Substep Progress Bar
                $('#content_step_strategy_exploration_containment_substep_seven').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
                // Clear Questions
                $('#containment_EffectiveControlB_yes').prop('checked', false);
                $('#containment_EffectiveControlB_no').prop('checked', false);
                $('#containment_EffectiveControlB_uncertain').prop('checked', false);
                $('#containment_EffectiveControlB_documentation').prop('value', "");
                break;
            case "4.8":
                // Substep Progress Bar
                $('#content_step_strategy_exploration_containment_substep_eight').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
                // Clear Questions
                $('#containment_NontargetImpacts_yes').prop('checked', false);
                $('#containment_NontargetImpacts_no').prop('checked', false);
                $('#containment_NontargetImpacts_uncertain').prop('checked', false);
                $('#containment_NontargetImpacts_documentation').prop('value', "");
                break;
        }
        // Execute Step Function
        JSON_Cookie_Step_Strategy_Exploration_Containment(cookieData, completedSteps, currentStep);
    }else if((currentStep === "5.1")||(currentStep === "5.2")||(currentStep === "5.3")||(currentStep === "5.4")||(currentStep === "5.5")){
        // Main Progress Bars
        $('#content_progress_bar_strategy_exploration').removeClass('progress_bar_inactive').removeClass('progress_bar_available').addClass('progress_bar_active');
        // Substep Progress Container
        $('#content_substep_strategy_exploration_suppression_container').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
        
        // SubStep Progress Bars & Clear Questions
        switch(currentStep){
            case "5.1":
                // Substep Progress Bar
                $('#content_step_strategy_exploration_suppression_substep_one').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
                // Clear Questions
                $('#suppression_SocialPoliticalA_yes').prop('checked', false);
                $('#suppression_SocialPoliticalA_no').prop('checked', false);
                $('#suppression_SocialPoliticalA_uncertain').prop('checked', false);
                $('#suppression_SocialPoliticalA_documentation').prop('value', "");
                break;
            case "5.2":
                // Substep Progress Bar
                $('#content_step_strategy_exploration_suppression_substep_two').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
                // Clear Questions
                $('#suppression_SocialPoliticalB_yes').prop('checked', false);
                $('#suppression_SocialPoliticalB_no').prop('checked', false);
                $('#suppression_SocialPoliticalB_uncertain').prop('checked', false);
                $('#suppression_SocialPoliticalB_documentation').prop('value', "");
                break;
            case "5.3":
                // Substep Progress Bar
                $('#content_step_strategy_exploration_suppression_substep_three').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
                // Clear Questions
                $('#suppression_EffectiveControlA_yes').prop('checked', false);
                $('#suppression_EffectiveControlA_no').prop('checked', false);
                $('#suppression_EffectiveControlA_uncertain').prop('checked', false);
                $('#suppression_EffectiveControlA_documentation').prop('value', "");
                $('#suppression_EffectiveControlAControlMethod_manual').prop('checked', false);
                $('#suppression_EffectiveControlAControlMethod_mechancial').prop('checked', false);
                $('#suppression_EffectiveControlAControlMethod_herbicide').prop('checked', false);
                $('#suppression_EffectiveControlAControlMethod_biological').prop('checked', false);
                $('#suppression_EffectiveControlAControlMethod_other').prop('checked', false);
                $('#suppression_EffectiveControlAControlMethodDescription').prop('value', "");
                break;
            case "5.4":
                // Substep Progress Bar
                $('#content_step_strategy_exploration_suppression_substep_four').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
                // Clear Questions
                $('#suppression_EffectiveControlB_yes').prop('checked', false);
                $('#suppression_EffectiveControlB_no').prop('checked', false);
                $('#suppression_EffectiveControlB_uncertain').prop('checked', false);
                $('#suppression_EffectiveControlB_documentation').prop('value', "");
                break;
            case "5.5":
                // Substep Progress Bar
                $('#content_step_strategy_exploration_suppression_substep_five').removeClass('content_substep_inactive').removeClass('content_substep_available').addClass('content_substep_active');
                // Clear Questions
                $('#suppression_NontargetImpacts_yes').prop('checked', false);
                $('#suppression_NontargetImpacts_no').prop('checked', false);
                $('#suppression_NontargetImpacts_uncertain').prop('checked', false);
                $('#suppression_NontargetImpacts_documentation').prop('value', "");
                break;
        }
        // Execute Step Function
        JSON_Cookie_Step_Strategy_Exploration_Suppression(cookieData, completedSteps, currentStep);
    }
};
/***********************************************\
 * Popup(originalType, newType, content)       *
 * ------------------------------------------- *
 * originalType - Original record type         *
 * newType - New record type                   *
 * content - Content to be placed in div       *
 * backDestination - Pointing to previous      *
\***********************************************/
function Popup(originalType, newType, content, backDestination, cookieData, completedSteps, currentStep){
    // For a quick fix - We're going to hard code the bypass destination.
    var bypassDestination;
    switch(currentStep){
        case '3.1': bypassDestination = '3.2'; break;
        case '3.2': bypassDestination = '3.3'; break;
        case '3.3': bypassDestination = '3.4'; break;
        case '3.4': bypassDestination = '3.5'; break;
        case '3.5': bypassDestination = '3.6'; break;
        case '3.6': bypassDestination = '3.7'; break;
        case '3.7': bypassDestination = '3.8'; break;
        case '3.8': bypassDestination = '3.9'; break;
        case '3.9': bypassDestination = 'none'; break;
        case '4.1': bypassDestination = '4.2'; break;
        case '4.2': bypassDestination = '4.3'; break;
        case '4.3': bypassDestination = '4.4'; break;
        case '4.4': bypassDestination = '4.5'; break;
        case '4.5': bypassDestination = '4.6'; break;
        case '4.6': bypassDestination = '4.7'; break;
        case '4.7': bypassDestination = '4.8'; break;
        case '4.8': bypassDestination = 'none'; break;
        case '5.1': bypassDestination = '5.2'; break;
        case '5.2': bypassDestination = '5.3'; break;
        case '5.3': bypassDestination = '5.4'; break;
        case '5.4': bypassDestination = '5.5'; break;
        case '5.5': bypassDestination = 'none'; break;
    }
    $('#content_uncertain_confirm_container').removeClass('content_step_active').addClass('content_step_inactive');
    $('#content_uncertain_confirm').prop('checked', false);
    // Fill Content
    if(newType !== null){
        $('#content_uncertain_popup_title').empty().append('Changing record to <b>' + newType + '</b>');
    }else{
        $('#content_uncertain_popup_title').empty().append('Cannot proceed.');
    }
    if((originalType !== null)&&(newType !== null)){
        $('#content_uncertain_content').empty().append('The text when a record is changing.<br />Changing record from <b>' + originalType + '</b> to <b> ' + newType + '</b>');
        $('#content_uncertain_popup_close').empty().append('Proceed.');
        $('#content_uncertain_popup_back').removeClass('content_uncertain_popup_inactive');
        $('#content_uncertain_confirm_container').removeClass('content_step_inactive').addClass('content_step_active');
    }else{
        $('#content_uncertain_content').empty().append('Cannot proceed with uncertain.');
        $('#content_uncertain_popup_close').empty().append('Okay.');
        $('#content_uncertain_popup_back').addClass('content_uncertain_popup_inactive');
    }

    // Button Functionality
    $('#content_uncertain_popup_close').click(function(){
        $('#content_uncertain_popup_container').removeClass('content_uncertain_popup_active').addClass('content_uncertain_popup_inactive');
        if($('#content_uncertain_confirm').prop('checked') === true){
            Check_Available_Steps(cookieData, completedSteps, bypassDestination);
        }
    });
    $('#content_uncertain_popup_back').click(function(){
        $('#content_uncertain_popup_container').removeClass('content_uncertain_popup_active').addClass('content_uncertain_popup_inactive');
        Check_Available_Steps(cookieData, completedSteps, backDestination);
    });

    // Display
    $('#content_uncertain_popup_container').removeClass('content_uncertain_popup_inactive').addClass('content_uncertain_popup_active');
    
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
            projectBackground: {
                Assessors: null,
                AssessorsDate: null,
                ScientificName: null,
                CommonName: null,
                Scale: null,
                PRISMWMA: null,
                ConservationTargetImpacted: null,
                ProjectAreaName: null,
                ProjectAreaSize: null,
                PropertyOwners: null,
                ProjectState: null,
                ProjectCounty: null,
                ProjectCoordX: null,
                ProjectCoordY: null,
                ProjectCoordSystem: null,
                ProjectGoal: null,
                NumberOfYearsToComplete: null,
                StartDate: null,
                EndDate: null,
                OngoingProject: null,
                ControlRequired: null,
                GrossInvadedArea: null,
                NetInvadedArea: null,
                NumberOfOccurances: null,
                ImapShareResults: null,
                ImapAccount: null
            },
            // STRATEGY SELECTION (STEP 2)
            strategySelection: {
                NYSScore: null,
                Checkbox: null,
                Documentation: null,
                AbundanceAndDistributionCheckbox: null,
                AbundanceAndDistributionDocumentation: null,
                AbundanceAndDistributionConfirm: null,
                AbundanceAndDistributionAlternative: null,
                AbundanceAndDistributionAlternativeDocumentation: null
            },
            // STRATEGY EXPLORATION (ERADICATION) (STEP 3)
            eradication: {
                SocialPoliticalA: null,
                SocialPoliticalADocumentation: null,
                SocialPoliticalB: null,
                SocialPoliticalBDocumentation: null,
                SocialPoliticalC: null,
                SocialPoliticalCDocumentation: null,
                PreventingReproductionA: null,
                PreventingReproductionADocumentation: null,
                PreventingReproductionB: null,
                PreventingReproductionBDocumentation: null,
                Detection: null,
                DetectionDocumentation: null,
                EffectiveControlA: null,
                EffectiveControlADocumentation: null,
                EffectiveControlAControlMethod: null,
                EffectiveControlAControlMethodDescription: null,
                EffectiveControlB: null,
                EffectiveControlBDocumentation: null,
                NontargetImpacts: null,
                NontargetImpactsDocumentation: null
            },
            // STRATEGY EXPLORATION (CONTAINMENT) (STEP 4)
            containment: {
                SocialPoliticalA: null,
                SocialPoliticalADocumentation: null,
                SocialPoliticalB: null,
                SocialPoliticalBDocumentation: null,
                PreventingReproductionA: null,
                PreventingReproductionADocumentation: null,
                PreventingReproductionB: null,
                PreventingReproductionBDocumentation: null,
                DetectingSmall: null,
                DetectingSmallDocumentation: null,
                EffectiveControlA: null,
                EffectiveControlADocumentation: null,
                EffectiveControlAControlMethod: null,
                EffectiveControlAControlMethodDescription: null,
                EffectiveControlB: null,
                EffectiveControlBDocumentation: null,
                NontargetImpacts: null,
                NontargetImpactsDocumentation: null
            },
            // STRATEGY EXPLORATION (SUPPRESSION) (STEP 5)
            suppression: {
                SocialPoliticalA: null,
                SocialPoliticalADocumentation: null,
                SocialPoliticalB: null,
                SocialPoliticalBDocumentation: null,
                EffectiveControlA: null,
                EffectiveControlADocumentation: null,
                EffectiveControlAControlMethod: null,
                EffectiveControlAControlMethodDescription: null,
                EffectiveControlB: null,
                EffectiveControlBDocumentation: null,
                NontargetImpacts: null,
                NontargetImpactsDocumentation: null
            }
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
            projectBackground: {
                Assessors: null,
                AssessorsDate: null,
                ScientificName: null,
                CommonName: null,
                Scale: null,
                PRISMWMA: null,
                ConservationTargetImpacted: null,
                ProjectAreaName: null,
                ProjectAreaSize: null,
                PropertyOwners: null,
                ProjectState: null,
                ProjectCounty: null,
                ProjectCoordX: null,
                ProjectCoordY: null,
                ProjectCoordSystem: null,
                ProjectGoal: null,
                NumberOfYearsToComplete: null,
                StartDate: null,
                EndDate: null,
                OngoingProject: null,
                ControlRequired: null,
                GrossInvadedArea: null,
                NetInvadedArea: null,
                NumberOfOccurances: null,
                ImapShareResults: null,
                ImapAccount: null
            },
            // STRATEGY SELECTION (STEP 2)
            strategySelection: {
                NYSScore: null,
                Checkbox: null,
                Documentation: null,
                AbundanceAndDistributionCheckbox: null,
                AbundanceAndDistributionDocumentation: null,
                AbundanceAndDistributionConfirm: null,
                AbundanceAndDistributionAlternative: null,
                AbundanceAndDistributionAlternativeDocumentation: null
            },
            // STRATEGY EXPLORATION (ERADICATION) (STEP 3)
            eradication: {
                SocialPoliticalA: null,
                SocialPoliticalADocumentation: null,
                SocialPoliticalB: null,
                SocialPoliticalBDocumentation: null,
                SocialPoliticalC: null,
                SocialPoliticalCDocumentation: null,
                PreventingReproductionA: null,
                PreventingReproductionADocumentation: null,
                PreventingReproductionB: null,
                PreventingReproductionBDocumentation: null,
                Detection: null,
                DetectionDocumentation: null,
                EffectiveControlA: null,
                EffectiveControlADocumentation: null,
                EffectiveControlAControlMethod: null,
                EffectiveControlAControlMethodDescription: null,
                EffectiveControlB: null,
                EffectiveControlBDocumentation: null,
                NontargetImpacts: null,
                NontargetImpactsDocumentation: null
            },
            // STRATEGY EXPLORATION (CONTAINMENT) (STEP 4)
            containment: {
                SocialPoliticalA: null,
                SocialPoliticalADocumentation: null,
                SocialPoliticalB: null,
                SocialPoliticalBDocumentation: null,
                PreventingReproductionA: null,
                PreventingReproductionADocumentation: null,
                PreventingReproductionB: null,
                PreventingReproductionBDocumentation: null,
                DetectingSmall: null,
                DetectingSmallDocumentation: null,
                EffectiveControlA: null,
                EffectiveControlADocumentation: null,
                EffectiveControlAControlMethod: null,
                EffectiveControlAControlMethodDescription: null,
                EffectiveControlB: null,
                EffectiveControlBDocumentation: null,
                NontargetImpacts: null,
                NontargetImpactsDocumentation: null
            },
            // STRATEGY EXPLORATION (SUPPRESSION) (STEP 5)
            suppression: {
                SocialPoliticalA: null,
                SocialPoliticalADocumentation: null,
                SocialPoliticalB: null,
                SocialPoliticalBDocumentation: null,
                EffectiveControlA: null,
                EffectiveControlADocumentation: null,
                EffectiveControlAControlMethod: null,
                EffectiveControlAControlMethodDescription: null,
                EffectiveControlB: null,
                EffectiveControlBDocumentation: null,
                NontargetImpacts: null,
                NontargetImpactsDocumentation: null
            }
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
    if(savedData.projectBackground.Assessors !== null){
        cookieData.projectBackground.Assessors = savedData.projectBackground.Assessors;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("1.1");
    }
    stepFail = false;

    // *** 1.2 ***
    //projectBackgroundProjectGoal
    if(savedData.projectBackground.ProjectGoal !== null){
        cookieData.projectBackground.ProjectGoal = savedData.projectBackground.ProjectGoal;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("1.2");
    }
    stepFail = false;

    // *** 1.3 ***
    //projectBackgroundGrossInvadedArea
    if(savedData.projectBackground.GrossInvadedArea !== null){
        cookieData.projectBackground.GrossInvadedArea = savedData.projectBackground.GrossInvadedArea;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("1.3");
    }
    stepFail = false;

    // *** 1.4 ***
    //projectBackgroundImapShareResults
    if(savedData.projectBackground.ImapShareResults !== null){
        cookieData.projectBackground.ImapShareResults = savedData.projectBackground.ImapShareResults;
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
    if(savedData.strategySelection.NYSScore !== null){
        cookieData.strategySelection.NYSScore = savedData.strategySelection.NYSScore;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("2.1");
    }
    stepFail = false;

    // *** 2.2 ***
    if(savedData.strategySelection.AbundanceAndDistributionCheckbox !== null){
        cookieData.strategySelection.AbundanceAndDistributionCheckbox = savedData.strategySelection.AbundanceAndDistributionCheckbox;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("2.2");
    }
    stepFail = false;
    
    // *** 2.3 ***
    if(savedData.strategySelection.AbundanceAndDistributionConfirm !== null){
        cookieData.strategySelection.AbundanceAndDistributionConfirm = savedData.strategySelection.AbundanceAndDistributionConfirm;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("2.3");
    }
    stepFail = false;
    
    // *** 2.4 ***
    if(savedData.strategySelection.AbundanceAndDistributionAlternative !== null){
        cookieData.strategySelection.AbundanceAndDistributionAlternative = savedData.strategySelection.AbundanceAndDistributionAlternative;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("2.4");
    }
    stepFail = false;
    
    //------------------------------------------------------------------------\\
    // Strategy Selection                                                     \\
    //------------------------------------------------------------------------\\
    // *** 3.1 ***
    if(savedData.eradication.SocialPoliticalA !== null){
        cookieData.eradication.SocialPoliticalA = savedData.eradication.SocialPoliticalA;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.1");
    }
    stepFail = false;

    // *** 3.2 ***
    if(savedData.eradication.SocialPoliticalB !== null){
        cookieData.eradication.SocialPoliticalB = savedData.eradication.SocialPoliticalB;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.2");
    }
    stepFail = false;

    // *** 3.3 ***
    if(savedData.eradication.SocialPoliticalC !== null){
        cookieData.eradication.SocialPoliticalC = savedData.eradication.SocialPoliticalC;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.3");
    }
    stepFail = false;
    
    // *** 3.4 ***
    if(savedData.eradication.PreventingReproductionA !== null){
        cookieData.eradication.PreventingReproductionA = savedData.eradication.PreventingReproductionA;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.4");
    }
    stepFail = false;

    // *** 3.5 ***
    if(savedData.eradication.PreventingReproductionB !== null){
        cookieData.eradication.PreventingReproductionB = savedData.eradication.PreventingReproductionB;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.5");
    }
    stepFail = false;

    // *** 3.6 ***
    if(savedData.eradication.Detection !== null){
        cookieData.eradication.Detection = savedData.eradication.Detection;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.6");
    }
    stepFail = false;

    // *** 3.7 ***
    if(savedData.eradication.EffectiveControlA !== null){
        cookieData.eradication.EffectiveControlA = savedData.eradication.EffectiveControlA;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.7");
    }
    stepFail = false;

    // *** 3.8 ***
    if(savedData.eradication.EffectiveControlB !== null){
        cookieData.eradication.EffectiveControlB = savedData.eradication.EffectiveControlB;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.8");
    }
    stepFail = false;

    // *** 3.9 ***
    if(savedData.eradication.NontargetImpacts !== null){
        cookieData.eradication.NontargetImpacts = savedData.eradication.NontargetImpacts;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("3.9");
    }
    stepFail = false;

    // *** 4.1 ***
    if(savedData.containment.SocialPoliticalA !== null){
        cookieData.containment.SocialPoliticalA = savedData.containment.SocialPoliticalA;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("4.1");
    }
    stepFail = false;

    // *** 4.2 ***
    if(savedData.containment.SocialPoliticalB !== null){
        cookieData.containment.SocialPoliticalB = savedData.containment.SocialPoliticalB;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("4.2");
    }
    stepFail = false;

    // *** 4.3 ***
    if(savedData.containment.PreventingReproductionA !== null){
        cookieData.containment.PreventingReproductionA = savedData.containment.PreventingReproductionA;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("4.3");
    }
    stepFail = false;

    // *** 4.4 ***
    if(savedData.containment.PreventingReproductionB !== null){
        cookieData.containment.PreventingReproductionB = savedData.containment.PreventingReproductionB;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("4.4");
    }
    stepFail = false;

    // *** 4.5 ***
    if(savedData.containment.DetectingSmall !== null){
        cookieData.containment.DetectingSmall = savedData.containment.DetectingSmall;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("4.5");
    }
    stepFail = false;

    // *** 4.6 ***
    if(savedData.containment.EffectiveControlA !== null){
        cookieData.containment.EffectiveControlA = savedData.containment.EffectiveControlA;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("4.6");
    }
    stepFail = false;

    // *** 4.7 ***
    if(savedData.containment.EffectiveControlB !== null){
        cookieData.containment.EffectiveControlB = savedData.containment.EffectiveControlB;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("4.7");
    }
    stepFail = false;

    // *** 4.8 ***
    if(savedData.containment.NontargetImpacts !== null){
        cookieData.containment.NontargetImpacts = savedData.containment.NontargetImpacts;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("4.8");
    }
    stepFail = false;

    // *** 5.1 ***
    if(savedData.suppression.SocialPoliticalA !== null){
        cookieData.suppression.SocialPoliticalA = savedData.suppression.SocialPoliticalA;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("5.1");
    }
    stepFail = false;

    // *** 5.2 ***
    if(savedData.suppression.SocialPoliticalB !== null){
        cookieData.suppression.SocialPoliticalB = savedData.suppression.SocialPoliticalB;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("5.2");
    }
    stepFail = false;

    // *** 5.3 ***
    if(savedData.suppression.EffectiveControlA !== null){
        cookieData.suppression.EffectiveControlA = savedData.suppression.EffectiveControlA;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("5.3");
    }
    stepFail = false;

    // *** 5.4 ***
    if(savedData.suppression.EffectiveControlB !== null){
        cookieData.suppression.EffectiveControlB = savedData.suppression.EffectiveControlB;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("5.4");
    }
    stepFail = false;

    // *** 5.5 ***
    if(savedData.suppression.NontargetImpacts !== null){
        cookieData.suppression.NontargetImpacts = savedData.suppression.NontargetImpacts;
    }else{ stepFail = true; }
    if(stepFail === false){
        completedSteps.push("5.5");
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
    /*************************************************\
     *  This is the first instantion of the flow of  *
     *      the step process. It's quite unorganized *
     *      and I would recommend that you look to   *
     *      the eradication/containment/suppression  *
     *      steps to see the program flow.           *
    \*************************************************/
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
            projectBackground: {
                AssessorsAnswer: null,
                AssessorsDateAnswer: null,
                ScientificNameAnswer: null,
                CommonNameAnswer: null,
                ScaleAnswer: null,
                PRISMWMAAnswer: null,
                ConservationTargetImpactedAnswer: null,
                ProjectAreaNameAnswer: null,
                ProjectAreaSizeAnswer: null,
                PropertyOwnersAnswer: null,
                ProjectStateAnswer: null,
                ProjectCountyAnswer: null,
                ProjectCoordXAnswer: null,
                ProjectCoordYAnswer: null,
                ProjectCoordSystemAnswer: null,
                ProjectGoalAnswer: null,
                NumberOfYearsToCompleteAnswer: null,
                StartDateAnswer: null,
                EndDateAnswer: null,
                OngoingProjectAnswer: null,
                ControlRequiredAnswer: null,
                GrossInvadedAreaAnswer: null,
                NetInvadedAreaAnswer: null,
                NumberOfOccurancesAnswer: null,
                ImapShareResultsAnswer: null,
                ImapAccountAnswer: null
            }
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
        if(cookieData.projectBackground.Assessors !== null){ projectBackgroundArray.projectBackground.AssessorsAnswer = cookieData.projectBackground.Assessors; }
        if(cookieData.projectBackground.AssessorsDate !== null){ projectBackgroundArray.projectBackground.AssessorsDateAnswer = cookieData.projectBackground.AssessorsDate; }
        if(cookieData.projectBackground.ScientificName !== null){ projectBackgroundArray.projectBackground.ScientificNameAnswer = cookieData.projectBackground.ScientificName; }
        if(cookieData.projectBackground.CommonName !== null){ projectBackgroundArray.projectBackground.CommonNameAnswer = cookieData.projectBackground.CommonName; }
        if(cookieData.projectBackground.Scale !== null){ projectBackgroundArray.projectBackground.ScaleAnswer = cookieData.projectBackground.Scale; }
        if(cookieData.projectBackground.PRISMWMA !== null){ projectBackgroundArray.projectBackground.PRISMWMAAnswer = cookieData.projectBackground.PRISMWMA; }
        if(cookieData.projectBackground.ConservationTargetImpacted !== null){ projectBackgroundArray.projectBackground.ConservationTargetImpactedAnswer = cookieData.projectBackground.ConservationTargetImpacted; }
        if(cookieData.projectBackground.ProjectAreaName !== null){ projectBackgroundArray.projectBackground.ProjectAreaNameAnswer = cookieData.projectBackground.ProjectAreaName; }
        if(cookieData.projectBackground.ProjectAreaSize !== null){ projectBackgroundArray.projectBackground.ProjectAreaSizeAnswer = cookieData.projectBackground.ProjectAreaSize; }
        if(cookieData.projectBackground.PropertyOwners !== null){ projectBackgroundArray.projectBackground.PropertyOwnersAnswer = cookieData.projectBackground.PropertyOwners; }
        if(cookieData.projectBackground.ProjectState !== null){ projectBackgroundArray.projectBackground.ProjectStateAnswer = cookieData.projectBackground.ProjectState; }
        if(cookieData.projectBackground.ProjectCounty !== null){ projectBackgroundArray.projectBackground.ProjectCountyAnswer = cookieData.projectBackground.ProjectCounty; }
        if(cookieData.projectBackground.ProjectCoordX !== null){ projectBackgroundArray.projectBackground.ProjectCoordXAnswer = cookieData.projectBackground.ProjectCoordX; }
        if(cookieData.projectBackground.ProjectCoordY !== null){ projectBackgroundArray.projectBackground.ProjectCoordYAnswer = cookieData.projectBackground.ProjectCoordY; }
        if(cookieData.projectBackground.ProjectCoordSystem !== null){ projectBackgroundArray.projectBackground.ProjectCoordSystemAnswer = cookieData.projectBackground.ProjectCoordSystem; }
        // Populate Fields w/ values
        $('#project_background_assessors').prop('value', projectBackgroundArray.projectBackground.AssessorsAnswer);
        $('#project_background_assessors_date').prop('value', projectBackgroundArray.projectBackground.AssessorsDateAnswer);
        $('#project_background_scientific_name').prop('value', projectBackgroundArray.projectBackground.ScientificNameAnswer);
        $('#project_background_common_name').prop('value', projectBackgroundArray.projectBackground.CommonNameAnswer);
        $('#project_background_scale').prop('value', projectBackgroundArray.projectBackground.ScaleAnswer);
        $('#project_background_PRISMWMA').prop('value', projectBackgroundArray.projectBackground.PRISMWMAAnswer);
        $('#project_background_conservation_target_impacted').prop('value', projectBackgroundArray.projectBackground.ConservationTargetImpactedAnswer);
        $('#project_background_project_area_name').prop('value', projectBackgroundArray.projectBackground.ProjectAreaNameAnswer);
        $('#project_background_project_area_size').prop('value', projectBackgroundArray.projectBackground.ProjectAreaSizeAnswer);
        $('#project_background_property_owners').prop('value', projectBackgroundArray.projectBackground.PropertyOwnersAnswer);
        $('#project_background_project_state').prop('value', projectBackgroundArray.projectBackground.ProjectStateAnswer);
        $('#project_background_project_county').prop('value', projectBackgroundArray.projectBackground.ProjectCountyAnswer);
        $('#project_background_project_coord_x').prop('value', projectBackgroundArray.projectBackground.ProjectCoordXAnswer);
        $('#project_background_project_coord_y').prop('value', projectBackgroundArray.projectBackground.ProjectCoordYAnswer);
        $('#project_background_project_coord_system').prop('value', projectBackgroundArray.projectBackground.ProjectCoordSystemAnswer);
    }else if(currentStep === "1.2"){
        // Check if there is any data present
        if(cookieData.projectBackground.ProjectGoal !== null){ projectBackgroundArray.projectBackground.ProjectGoalAnswer = cookieData.projectBackground.ProjectGoal; }
        if(cookieData.projectBackground.NumberOfYearsToComplete !== null){ projectBackgroundArray.projectBackground.NumberOfYearsToCompleteAnswer = cookieData.projectBackground.NumberOfYearsToComplete; }
        if(cookieData.projectBackground.StartDate !== null){ projectBackgroundArray.projectBackground.StartDateAnswer = cookieData.projectBackground.StartDate; }
        if(cookieData.projectBackground.EndDate !== null){ projectBackgroundArray.projectBackground.EndDateAnswer = cookieData.projectBackground.EndDate; }
        if(cookieData.projectBackground.OngoingProject !== null){ projectBackgroundArray.projectBackground.OngoingProjectAnswer = cookieData.projectBackground.OngoingProject; }
        if(cookieData.projectBackground.ControlRequired !== null){ projectBackgroundArray.projectBackground.ControlRequiredAnswer = cookieData.projectBackground.ControlRequired; }
        // Populate Fields w/ values
        $('#project_background_project_goal').prop('value', projectBackgroundArray.projectBackground.ProjectGoalAnswer);
        $('#project_background_number_of_years_to_complete').prop('value', projectBackgroundArray.projectBackground.NumberOfYearsToCompleteAnswer);
        $('#project_background_start_date').prop('value', projectBackgroundArray.projectBackground.StartDateAnswer);
        $('#project_background_end_date').prop('value', projectBackgroundArray.projectBackground.EndDateAnswer);
        $('#project_background_ongoing_project').prop('value', projectBackgroundArray.projectBackground.OngoingProjectAnswer);
        $('#project_background_control_required').prop('value', projectBackgroundArray.projectBackground.ControlRequiredAnswer);
    }else if(currentStep === "1.3"){
        // Check if there is any data present
        if(cookieData.projectBackground.GrossInvadedArea !== null){ projectBackgroundArray.projectBackground.GrossInvadedAreaAnswer = cookieData.projectBackground.GrossInvadedArea; }
        if(cookieData.projectBackground.NetInvadedArea !== null){ projectBackgroundArray.projectBackground.NetInvadedAreaAnswer = cookieData.projectBackground.NetInvadedArea; }
        if(cookieData.projectBackground.NumberOfOccurances !== null){ projectBackgroundArray.projectBackground.NumberOfOccurancesAnswer = cookieData.projectBackground.NumberOfOccurances; }
        // Populate Fields w/ values
        $('#project_background_gross_invaded_area').prop('value', projectBackgroundArray.projectBackground.GrossInvadedAreaAnswer);
        $('#project_background_net_invaded_area').prop('value', projectBackgroundArray.projectBackground.NetInvadedAreaAnswer);
        $('#project_background_number_of_occurances').prop('value', projectBackgroundArray.projectBackground.NumberOfOccurancesAnswer);
    }else if(currentStep === "1.4"){
        // Check if there is any data present
        if(cookieData.projectBackground.ImapShareResults !== null){ projectBackgroundArray.projectBackground.ImapShareResultsAnswer = cookieData.projectBackground.ImapShareResults; }
        if(cookieData.projectBackground.ImapAccount !== null){ projectBackgroundArray.projectBackground.ImapAccountAnswer = cookieData.projectBackground.ImapAccount; }
        // Populate Fields w/ values
        $('#project_background_imap_share_results').prop('value', projectBackgroundArray.projectBackground.ImapShareResultsAnswer);
        $('#project_background_imap_account').prop('value', projectBackgroundArray.projectBackground.ImapAccountAnswer);
    }

    // Function Form Checks & Misc Functions
    function Project_Background_Substep_One_Check(form_array){
        if(form_array.projectBackground.AssessorsAnswer !== null){
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
        if(form_array.projectBackground.ProjectGoalAnswer !== null){
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
        if(form_array.projectBackground.GrossInvadedAreaAnswer !== null){
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
        if(form_array.projectBackground.ImapShareResultsAnswer !== null){
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
            projectBackgroundArray.projectBackground.AssessorsDateAnswer = null;
        }else{
            projectBackgroundArray.projectBackground.AssessorsDateAnswer = $('#project_background_assessors_date').val();
        }
        // Populate saveArray
        saveArray = {
            projectBackground: {
                Assessors: projectBackgroundArray.projectBackground.AssessorsAnswer,
                AssessorsDate: projectBackgroundArray.projectBackground.AssessorsDateAnswer,
                ScientificName: projectBackgroundArray.projectBackground.ScientificNameAnswer,
                CommonName: projectBackgroundArray.projectBackground.CommonNameAnswer,
                Scale: projectBackgroundArray.projectBackground.ScaleAnswer,
                PRISMWMA: projectBackgroundArray.projectBackground.PRISMWMAAnswer,
                ConservationTargetImpacted: projectBackgroundArray.projectBackground.ConservationTargetImpactedAnswer,
                ProjectAreaName: projectBackgroundArray.projectBackground.ProjectAreaNameAnswer,
                ProjectAreaSize: projectBackgroundArray.projectBackground.ProjectAreaSizeAnswer,
                PropertyOwners: projectBackgroundArray.projectBackground.PropertyOwnersAnswer,
                ProjectState: projectBackgroundArray.projectBackground.ProjectStateAnswer,
                ProjectCounty: projectBackgroundArray.projectBackground.ProjectCountyAnswer,
                ProjectCoordX: projectBackgroundArray.projectBackground.ProjectCoordXAnswer,
                ProjectCoordY: projectBackgroundArray.projectBackground.ProjectCoordYAnswer,
                ProjectCoordSystem: projectBackgroundArray.projectBackground.ProjectCoordSystemAnswer
            }
        };
        if(projectBackgroundArray.projectBackground.AssessorsAnswer !== null){
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
            projectBackgroundArray.projectBackground.StartDateAnswer = null;
        }else{
            projectBackgroundArray.projectBackground.StartDateAnswer = $('#project_background_start_date').val();
        }
        if($('#project_background_end_date').prop('value') === ""){
            projectBackgroundArray.projectBackground.EndDateAnswer = null;
        }else{
            projectBackgroundArray.projectBackground.EndDateAnswer = $('#project_background_end_date').val();
        }
        // Populate saveArray
        saveArray = {
            projectBackground: {
                ProjectGoal: projectBackgroundArray.projectBackground.ProjectGoalAnswer,
                NumberOfYearsToComplete: projectBackgroundArray.projectBackground.NumberOfYearsToCompleteAnswer,
                StartDate: projectBackgroundArray.projectBackground.StartDateAnswer,
                EndDate: projectBackgroundArray.projectBackground.EndDateAnswer,
                OngoingProject: projectBackgroundArray.projectBackground.OngoingProjectAnswer,
                ControlRequired: projectBackgroundArray.projectBackground.ControlRequiredAnswer
            }
        };
        if(projectBackgroundArray.projectBackground.ProjectGoalAnswer !== null){
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
            projectBackground: {
                GrossInvadedArea: projectBackgroundArray.projectBackground.GrossInvadedAreaAnswer,
                NetInvadedArea: projectBackgroundArray.projectBackground.NetInvadedAreaAnswer,
                NumberOfOccurances: projectBackgroundArray.projectBackground.NumberOfOccurancesAnswer
            }
        };
        if(projectBackgroundArray.projectBackground.GrossInvadedAreaAnswer !== null){
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
            projectBackground: {
                ImapShareResults: projectBackgroundArray.projectBackground.ImapShareResultsAnswer,
                ImapAccount: projectBackgroundArray.projectBackground.ImapAccountAnswer
            }
        };
        if(projectBackgroundArray.projectBackground.ImapShareResultsAnswer !== null){
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
            if(fieldLocation === "#project_background_assessors"){ projectBackgroundArray.projectBackground.AssessorsAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_scientific_name"){ projectBackgroundArray.projectBackground.ScientificNameAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_common_name"){ projectBackgroundArray.projectBackground.CommonNameAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_scale"){ projectBackgroundArray.projectBackground.ScaleAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_PRISMWMA"){ projectBackgroundArray.projectBackground.PRISMWMAAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_conservation_target_impacted"){ projectBackgroundArray.projectBackground.ConservationTargetImpactedAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_project_area_name"){ projectBackgroundArray.projectBackground.ProjectAreaNameAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_project_area_size"){ projectBackgroundArray.projectBackground.ProjectAreaSizeAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_property_owners"){ projectBackgroundArray.projectBackground.PropertyOwnersAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_project_state"){ projectBackgroundArray.projectBackground.ProjectStateAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_project_county"){ projectBackgroundArray.projectBackground.ProjectCountyAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_project_coord_x"){ projectBackgroundArray.projectBackground.ProjectCoordXAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_project_coord_y"){ projectBackgroundArray.projectBackground.ProjectCoordYAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_project_coord_system"){ projectBackgroundArray.projectBackground.ProjectCoordSystemAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_project_goal"){ projectBackgroundArray.projectBackground.ProjectGoalAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_number_of_years_to_complete"){ projectBackgroundArray.projectBackground.NumberOfYearsToCompleteAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_ongoing_project"){ projectBackgroundArray.projectBackground.OngoingProjectAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_control_required"){ projectBackgroundArray.projectBackground.ControlRequiredAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_gross_invaded_area"){ projectBackgroundArray.projectBackground.GrossInvadedAreaAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_net_invaded_area"){ projectBackgroundArray.projectBackground.NetInvadedAreaAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_number_of_occurances"){ projectBackgroundArray.projectBackground.NumberOfOccurancesAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_imap_share_results"){ projectBackgroundArray.projectBackground.ImapShareResultsAnswer = tempHolder;
            }else if(fieldLocation === "#project_background_imap_account"){ projectBackgroundArray.projectBackground.ImapAccountAnswer = tempHolder; }

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
                    var tempForward;
                    switch(cookieData.strategySelection.AbundanceAndDistributionConfirm){
                        case '#strategy_confirmation_yes':
                            switch(cookieData.strategySelection.AbundanceAndDistributionCheckbox){
                                case '#strategy_selection_eradication_state_scale':
                                    tempForward = '3.1';
                                    break;
                                case '#strategy_selection_containment_state_scale':
                                    tempForward = '4.1';
                                    break;
                                case '#strategy_selection_eradication_project_scale':
                                    tempForward = '3.1';
                                    break;
                                case '#strategy_selection_containment_project_scale':
                                    tempForward = '4.1';
                                    break;
                                case '#strategy_selection_suppression':
                                    tempForward = '5.1';
                                    break;
                            }
                            break;
                        case '#strategy_confirmation_no':
                            switch(cookieData.strategySelectionAbundanceAndDistributionAlternative){
                                case '#strategy_selection_alternative_eradication':
                                    tempForward = '3.1';
                                    break;
                                case '#strategy_selection_alternative_containment':
                                    tempForward = '4.1';
                                    break;
                                case '#strategy_selection_alternative_suppression':
                                    tempForward = '5.1';
                                    break;
                            }
                            break;
                    }
                    Check_Available_Steps(cookieData, completedSteps, tempForward);
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
            strategySelection: {
                NYSScore: null,
                Checkbox: null,
                Documentation: null,
                AbundanceAndDistributionCheckbox: null,
                AbundanceAndDistributionDocumentation: null,
                AbundanceAndDistributionConfirm: null,
                AbundanceAndDistributionAlternative: null,
                AbundanceAndDistributionAlternativeDocumentation: null
            }
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
            if(cookieData.strategySelection.NYSScore !== null){ strategySelectionArray.strategySelection.NYSScore = cookieData.strategySelection.NYSScore; }
            if(cookieData.strategySelection.Checkbox !== null){ strategySelectionArray.strategySelection.Checkbox = cookieData.strategySelection.Checkbox; }
            if(cookieData.strategySelection.Documentation !== null){ strategySelectionArray.strategySelection.Documentation = cookieData.strategySelection.Documentation; }
            // Populate Fields
            $('#strategy_selection_NYS_score').prop('value', strategySelectionArray.strategySelection.NYSScore);
            $('#strategy_selection_documentation').prop('value', strategySelectionArray.strategySelection.Documentation);
            switch(strategySelectionArray.strategySelection.Checkbox){
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
            if(cookieData.strategySelection.AbundanceAndDistributionCheckbox !== null){ strategySelectionArray.strategySelection.AbundanceAndDistributionCheckbox = cookieData.strategySelection.AbundanceAndDistributionCheckbox; }
            if(cookieData.strategySelection.AbundanceAndDistributionDocumentation !== null){ strategySelectionArray.strategySelection.AbundanceAndDistributionDocumentation = cookieData.strategySelection.AbundanceAndDistributionDocumentation; }
            // Populate Fields
            $('#strategy_selection_abundance_and_distribution_documentation').prop('value', strategySelectionArray.strategySelection.AbundanceAndDistributionDocumentation);
            switch(strategySelectionArray.strategySelection.AbundanceAndDistributionCheckbox){
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
            if(cookieData.strategySelection.AbundanceAndDistributionCheckbox !== null){ strategySelectionArray.strategySelection.AbundanceAndDistributionCheckbox = cookieData.strategySelection.AbundanceAndDistributionCheckbox; }
            if(cookieData.strategySelection.AbundanceAndDistributionConfirm !== null){ strategySelectionArray.strategySelection.AbundanceAndDistributionConfirm = cookieData.strategySelection.AbundanceAndDistributionConfirm; }
            // Populate Fields
            switch(strategySelectionArray.strategySelection.AbundanceAndDistributionConfirm){
                case "#strategy_confirmation_yes":
                    $('#strategy_confirmation_yes').prop('checked', true);
                    break;
                case "#strategy_confirmation_no":
                    $('#strategy_confirmation_no').prop('checked', true);
                    break;
            }
            break;
        case "2.4":
            $('#content_step_strategy_alternative_container').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.strategySelection.AbundanceAndDistributionAlternative !== null){ strategySelectionArray.strategySelection.AbundanceAndDistributionAlternative = cookieData.strategySelection.AbundanceAndDistributionAlternative; }
            if(cookieData.strategySelection.AbundanceAndDistributionAlternativeDocumentation !== null){ strategySelectionArray.strategySelection.AbundanceAndDistributionAlternativeDocumentation = cookieData.strategySelection.AbundanceAndDistributionAlternativeDocumentation; }
            // Populate Fields
            $('#strategy_selection_alternative_documentation').prop('value', strategySelectionArray.strategySelection.AbundanceAndDistributionAlternativeDocumentation);
            switch(strategySelectionArray.strategySelection.AbundanceAndDistributionAlternative){
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
            tempValue = formArray.strategySelection.NYSScore;
            nextStep = "#content_step_strategy_selection_substep_two";
        }else if(currentStep === "2.2"){
            tempValue = formArray.strategySelection.AbundanceAndDistributionCheckbox;
            nextStep = "#content_step_strategy_selection_substep_three";
        }else if(currentStep === "2.3"){
            tempValue = formArray.strategySelection.AbundanceAndDistributionConfirm;
            // Determine if moving to 2.4 or 3.1
            switch(formArray.strategySelection.AbundanceAndDistributionConfirm){
                case "#strategy_confirmation_yes":
                    nextStep = "#content_step_strategy_exploration_eradication_substep_one";
                    proceedContainer = "#content_progress_bar_strategy_exploration";
                    break;
                case "#strategy_confirmation_no":
                    nextStep = "#content_step_strategy_selection_substep_four";
                    break;
            }
        }else if(currentStep === "2.4"){
            tempValue = formArray.strategySelection.AbundanceAndDistributionAlternative;
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
                strategySelection: {
                    NYSScore: strategySelectionArray.strategySelection.NYSScore,
                    Checkbox: strategySelectionArray.strategySelection.Checkbox,
                    Documentation: strategySelectionArray.strategySelection.Documentation
                }
            };
            requiredField = strategySelectionArray.strategySelection.NYSScore;
        }else if(currentStep === "2.2"){
            saveArray = {
                strategySelection: {
                    AbundanceAndDistributionCheckbox: strategySelectionArray.strategySelection.AbundanceAndDistributionCheckbox,
                    AbundanceAndDistributionDocumentation: strategySelectionArray.strategySelection.AbundanceAndDistributionDocumentation
                }
            };
            requiredField = strategySelectionArray.strategySelection.AbundanceAndDistributionCheckbox;
        }else if(currentStep === "2.3"){
            saveArray = {
                strategySelection: {
                    AbundanceAndDistributionConfirm: strategySelectionArray.strategySelection.AbundanceAndDistributionConfirm
                }
            };
            requiredField = strategySelectionArray.strategySelection.AbundanceAndDistributionConfirm;
        }else if(currentStep === "2.4"){
            saveArray = {
                strategySelection: {
                    AbundanceAndDistributionAlternative: strategySelectionArray.strategySelection.AbundanceAndDistributionAlternative,
                    AbundanceAndDistributionAlternativeDocumentation: strategySelectionArray.strategySelection.AbundanceAndDistributionAlternativeDocumentation
                }
            };
            requiredField = strategySelectionArray.strategySelection.AbundanceAndDistributionAlternative;
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
                strategySelectionArray.strategySelection.Checkbox = '#strategy_selection_ecological_impact'; break;
            case '#strategy_selection_limited_distribution':
                strategySelectionArray.strategySelection.Checkbox = '#strategy_selection_limited_distribution'; break;
            case '#strategy_selection_widespread_distribution':
                strategySelectionArray.strategySelection.Checkbox = '#strategy_selection_widespread_distribution'; break;
            case '#strategy_selection_negligible_impact':
                strategySelectionArray.strategySelection.Checkbox = '#strategy_selection_negligible_impact'; break;
            case '#strategy_selection_significant_harm':
                strategySelectionArray.strategySelection.Checkbox = '#strategy_selection_significant_harm'; break;
            case '#strategy_selection_eradication_state_scale':
                strategySelectionArray.strategySelection.AbundanceAndDistributionCheckbox = '#strategy_selection_eradication_state_scale'; break;
            case '#strategy_selection_containment_state_scale':
                strategySelectionArray.strategySelection.AbundanceAndDistributionCheckbox = '#strategy_selection_containment_state_scale'; break;
            case '#strategy_selection_eradication_project_scale':
                strategySelectionArray.strategySelection.AbundanceAndDistributionCheckbox = '#strategy_selection_eradication_project_scale'; break;
            case '#strategy_selection_containment_project_scale':
                strategySelectionArray.strategySelection.AbundanceAndDistributionCheckbox = '#strategy_selection_containment_project_scale'; break;
            case '#strategy_selection_suppression':
                strategySelectionArray.strategySelection.AbundanceAndDistributionCheckbox = '#strategy_selection_suppression'; break;
            case '#strategy_confirmation_yes':
                strategySelectionArray.strategySelection.AbundanceAndDistributionConfirm = '#strategy_confirmation_yes'; break;
            case '#strategy_confirmation_no':
                strategySelectionArray.strategySelection.AbundanceAndDistributionConfirm = '#strategy_confirmation_no'; break;
            case '#strategy_selection_alternative_eradication':
                strategySelectionArray.strategySelection.AbundanceAndDistributionAlternative = '#strategy_selection_alternative_eradication'; break;
            case '#strategy_selection_alternative_containment':
                strategySelectionArray.strategySelection.AbundanceAndDistributionAlternative = '#strategy_selection_alternative_containment'; break;
            case '#strategy_selection_alternative_suppression':
                strategySelectionArray.strategySelection.AbundanceAndDistributionAlternative = '#strategy_selection_alternative_suppression'; break;
        }
        Strategy_Selection_Substep_Form_Check(strategySelectionArray);
    };
    // 7 -  Function - Add_Event_To_Field(fieldLocation, substep)       \\
    function Add_Event_To_Field(fieldLocation){
        var tempHolder;
        $(fieldLocation).keyup(function(){
            if($(fieldLocation).prop('value') === ""){
                tempHolder = null;
            }else{
                tempHolder = $(fieldLocation).val();
            }
            if(fieldLocation === "#strategy_selection_NYS_score"){ strategySelectionArray.strategySelection.NYSScore = tempHolder;
            }else if(fieldLocation === "#strategy_selection_documentation"){ strategySelectionArray.strategySelection.Documentation = tempHolder;
            }else if(fieldLocation === "#strategy_selection_abundance_and_distribution_documentation"){ strategySelectionArray.strategySelection.AbundanceAndDistributionDocumentation = tempHolder; 
            }else if(fieldLocation === "#strategy_selection_alternative_documentation"){ strategySelectionArray.strategySelection.AbundanceAndDistributionAlternativeDocumentation = tempHolder; }
            Strategy_Selection_Substep_Form_Check(strategySelectionArray);
        });
    };
    // 8 -  Function - Add_Event_To_Nav(destinationArray)               \\
    function Add_Event_To_Nav(destinationArray){
        $('#content_nav_forward').click(function(){
            if(destinationArray.forward !== 'none'){
                if($('#content_nav_forward').hasClass('content_nav_base_active')){
                    Strategy_Selection_Substep_Save();
                    var tempForward;

                    if(currentStep === '2.3'){
                        if(strategySelectionArray.strategySelection.AbundanceAndDistributionConfirm === "#strategy_confirmation_yes"){
                            switch(strategySelectionArray.strategySelection.AbundanceAndDistributionCheckbox){
                                case '#strategy_selection_eradication_state_scale':
                                    tempForward = "3.1";
                                    break;
                                case '#strategy_selection_containment_state_scale':
                                    tempForward = "4.1";
                                    break;
                                case '#strategy_selection_eradication_project_scale':
                                    tempForward = "3.1";
                                    break;
                                case '#strategy_selection_containment_project_scale':
                                    tempForward = "4.1";
                                    break;
                                case '#strategy_selection_suppression':
                                    tempForward = "5.1";
                                    break;
                            }
                        }else{
                            tempForward = "2.4";
                        }
                        Check_Available_Steps(cookieData, completedSteps, tempForward);
                    }else if(currentStep === '2.4'){
                        switch(strategySelectionArray.strategySelection.AbundanceAndDistributionAlternative){
                            case '#strategy_selection_alternative_eradication':
                                tempForward = '3.1';
                                break;
                            case '#strategy_selection_alternative_containment':
                                tempForward = '4.1';
                                break;
                            case '#strategy_selection_alternative_suppression':
                                tempForward = '5.1';
                                break;
                        }
                        Check_Available_Steps(cookieData, completedSteps, tempForward);
                    }else{
                        Check_Available_Steps(cookieData, completedSteps, destinationArray.forward);
                    }
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
        $('#content_step_strategy_selection_substep_one').click(function(){
            if(destinationArray.substep_one !== 'none'){
                if($('#content_step_strategy_selection_substep_one').hasClass('content_substep_available')){
                    Strategy_Selection_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_one);
                }
            }
        });
        $('#content_step_strategy_selection_substep_two').click(function(){
            if(destinationArray.substep_two !== 'none'){
                if($('#content_step_strategy_selection_substep_two').hasClass('content_substep_available')){
                    Strategy_Selection_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_two);
                }
            }
        });
        $('#content_step_strategy_selection_substep_three').click(function(){
            if(destinationArray.substep_three !== 'none'){
                if($('#content_step_strategy_selection_substep_three').hasClass('content_substep_available')){
                    Strategy_Selection_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_three);
                }
            }
        });
        $('#content_step_strategy_selection_substep_four').click(function(){
            if(destinationArray.substep_four !== 'none'){
                if($('#content_step_strategy_selection_substep_four').hasClass('content_substep_available')){
                    Strategy_Selection_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_four);
                }
            }
        });
        $('#content_progress_bar_project_background').click(function(){
            if(destinationArray.projectBackground !== 'none'){
                if($('#content_progress_bar_project_background').hasClass('progress_bar_available')){
                    Strategy_Selection_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.projectBackground);
                }
            }
        });
        $('#content_progress_bar_strategy_selection').click(function(){
            if(destinationArray.strategySelection !== 'none'){
                if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_available')){
                    Strategy_Selection_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.strategySelection);
                }
            }
        });
        $('#content_progress_bar_strategy_exploration').click(function(){
            if(destinationArray.strategyExploration !== 'none'){
                if($('#content_progress_bar_strategy_exploration').hasClass('progress_bar_available')){
                    Strategy_Selection_Substep_Save();
                    var tempForward;
                    switch(cookieData.strategySelection.AbundanceAndDistributionConfirm){
                        case '#strategy_confirmation_yes':
                            switch(cookieData.strategySelection.AbundanceAndDistributionCheckbox){
                                case '#strategy_selection_eradication_state_scale':
                                    tempForward = '3.1';
                                    break;
                                case '#strategy_selection_containment_state_scale':
                                    tempForward = '4.1';
                                    break;
                                case '#strategy_selection_eradication_project_scale':
                                    tempForward = '3.1';
                                    break;
                                case '#strategy_selection_containment_project_scale':
                                    tempForward = '4.1';
                                    break;
                                case '#strategy_selection_suppression':
                                    tempForward = '5.1';
                                    break;
                            }
                            break;
                        case '#strategy_confirmation_no':
                            switch(cookieData.strategySelection.AbundanceAndDistributionAlternative){
                                case '#strategy_selection_alternative_eradication':
                                    tempForward = '3.1';
                                    break;
                                case '#strategy_selection_alternative_containment':
                                    tempForward = '4.1';
                                    break;
                                case '#strategy_selection_alternative_suppression':
                                    tempForward = '5.1';
                                    break;
                            }
                            break;
                    }
                    Check_Available_Steps(cookieData, completedSteps, tempForward);
                }
            }
        });
    };
    // 9 -  Populate/Execute - Add_Event_To_Field, Add_Event_To_Nav     \\
    Strategy_Selection_Substep_Form_Check(strategySelectionArray);
    destinationArray = {
        current: '',
        forward: '',
        back: '',
        substep_one: '2.1',
        substep_two: '2.2',
        substep_three: '2.3',
        substep_four: '2.4',
        projectBackground: '1.1',
        strategySelection: 'none',
        strategyExploration: '3.1'
    };
    switch(currentStep){
        case "2.1":
            Add_Event_To_Field('#strategy_selection_NYS_score');
            Add_Event_To_Field('#strategy_selection_documentation');
            $('#strategy_selection_ecological_impact').change(function(){ Strategy_Selection_Check_Boxes('#strategy_selection_ecological_impact'); });
            $('#strategy_selection_limited_distribution').change(function(){ Strategy_Selection_Check_Boxes('#strategy_selection_limited_distribution'); });
            $('#strategy_selection_widespread_distribution').change(function(){ Strategy_Selection_Check_Boxes('#strategy_selection_widespread_distribution'); });
            $('#strategy_selection_negligible_impact').change(function(){ Strategy_Selection_Check_Boxes('#strategy_selection_negligible_impact'); });
            $('#strategy_selection_significant_harm').change(function(){ Strategy_Selection_Check_Boxes('#strategy_selection_significant_harm'); });
            destinationArray.back = '1.4';
            destinationArray.current = '2.1';
            destinationArray.forward = '2.2';
            destinationArray.substep_one = 'none';
            break;
        case "2.2":
            Add_Event_To_Field('#strategy_selection_abundance_and_distribution_documentation');
            $('#strategy_selection_eradication_state_scale').change(function(){ Strategy_Selection_Check_Boxes('#strategy_selection_eradication_state_scale'); });
            $('#strategy_selection_containment_state_scale').change(function(){ Strategy_Selection_Check_Boxes('#strategy_selection_containment_state_scale'); });
            $('#strategy_selection_eradication_project_scale').change(function(){ Strategy_Selection_Check_Boxes('#strategy_selection_eradication_project_scale'); });
            $('#strategy_selection_containment_project_scale').change(function(){ Strategy_Selection_Check_Boxes('#strategy_selection_containment_project_scale'); });
            $('#strategy_selection_suppression').change(function(){ Strategy_Selection_Check_Boxes('#strategy_selection_suppression'); });
            destinationArray.back = '2.1';
            destinationArray.current = '2.2';
            destinationArray.forward = '2.3';
            destinationArray.substep_two = 'none';
            break;
        case "2.3":
            var temp = strategySelectionArray.strategySelection.AbundanceAndDistributionCheckbox;
            switch(temp){
                case '#strategy_selection_eradication_state_scale':
                    $('#strategy_confirmation_main_title_container').empty().append(mainTitleEradicationStateScale);
                    $('#strategy_confirmation_subtext_container').empty().append(subtextEradicationStateScale);
                    break;
                case '#strategy_selection_containment_state_scale':
                    $('#strategy_confirmation_main_title_container').empty().append(mainTitleContainmentStateScale);
                    $('#strategy_confirmation_subtext_container').empty().append(subtextContainmentStateScale);
                    break;
                case '#strategy_selection_eradication_project_scale':
                    $('#strategy_confirmation_main_title_container').empty().append(mainTitleEradicationProjectScale);
                    $('#strategy_confirmation_subtext_container').empty().append(subtextEradicationProjectScale);
                    break;
                case '#strategy_selection_containment_project_scale':
                    $('#strategy_confirmation_main_title_container').empty().append(mainTitleContainmentProjectScale);
                    $('#strategy_confirmation_subtext_container').empty().append(subtextContainmentProjectScale);
                    break;
                case '#strategy_selection_suppression':
                    $('#strategy_confirmation_main_title_container').empty().append(mainTitleSuppression);
                    $('#strategy_confirmation_subtext_container').empty().append(subtextSuppression);
                    break;
            }
            $('#strategy_confirmation_yes').change(function(){ Strategy_Selection_Check_Boxes('#strategy_confirmation_yes'); });
            $('#strategy_confirmation_no').change(function(){ Strategy_Selection_Check_Boxes('#strategy_confirmation_no'); });
            // Determine forward location
            // We need to put this on a function - since the variable won't be
            //      determined until the form is complete.
            switch(strategySelectionArray.strategySelection.AbundanceAndDistributionConfirm){
                case "#strategy_confirmation_yes":
                    destinationArray.forward = 'TBD';
                    break;
                case "#strategy_confirmation_no":
                    destinationArray.forward = '2.4';
                    break;
            }
            destinationArray.back = '2.2';
            destinationArray.current = '2.3';
            destinationArray.substep_three = 'none';
            break;
        case "2.4":
            Add_Event_To_Field('#strategy_selection_alternative_documentation');
            $('#strategy_selection_alternative_eradication').change(function(){ Strategy_Selection_Check_Boxes('#strategy_selection_alternative_eradication'); });
            $('#strategy_selection_alternative_containment').change(function(){ Strategy_Selection_Check_Boxes('#strategy_selection_alternative_containment'); });
            $('#strategy_selection_alternative_suppression').change(function(){ Strategy_Selection_Check_Boxes('#strategy_selection_alternative_suppression'); });
            destinationArray.back = '2.3';
            destinationArray.current = '2.4';
            destinationArray.substep_four = 'none';
            destinationArray.forward = 'TBD';
            break;
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
            eradication: {
                SocialPoliticalA: null,
                SocialPoliticalADocumentation: null,
                SocialPoliticalB: null,
                SocialPoliticalBDocumentation: null,
                SocialPoliticalC: null,
                SocialPoliticalCDocumentation: null,
                PreventingReproductionA: null,
                PreventingReproductionADocumentation: null,
                PreventingReproductionB: null,
                PreventingReproductionBDocumentation: null,
                Detection: null,
                DetectionDocumentation: null,
                EffectiveControlA: null,
                EffectiveControlADocumentation: null,
                EffectiveControlAControlMethod: null,
                EffectiveControlAControlMethodDescription: null,
                EffectiveControlB: null,
                EffectiveControlBDocumentation: null,
                NontargetImpacts: null,
                NontargetImpactsDocumentation: null
            }
        },
        saveArray = {},
        destinationArray = {
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
            if(cookieData.eradication.SocialPoliticalA !== null){ eradicationArray.eradication.SocialPoliticalA = cookieData.eradication.SocialPoliticalA; }
            if(cookieData.eradication.SocialPoliticalADocumentation !== null){ eradicationArray.eradication.SocialPoliticalADocumentation = cookieData.eradication.SocialPoliticalADocumentation; }
            // Populate Fields
            switch(eradicationArray.eradication.SocialPoliticalA){
                case "#eradication_SocialPoliticalA_yes":
                    $('#eradication_SocialPoliticalA_yes').prop('checked', true);
                    destinationArray.forward = '3.2';
                    break;
                case "#eradication_SocialPoliticalA_no":
                    $('#eradication_SocialPoliticalA_no').prop('checked', true);
                    destinationArray.forward = '4.1';
                    break;
                case "#eradication_SocialPoliticalA_uncertain":
                    $('#eradication_SocialPoliticalA_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#eradication_SocialPoliticalA_documentation').prop('value', eradicationArray.eradication.SocialPoliticalADocumentation);
            break;
        case "3.2":
            $('#content_step_strategy_exploration_eradication_SocialPoliticalB').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.eradication.SocialPoliticalB !== null){ eradicationArray.eradication.SocialPoliticalB = cookieData.eradication.SocialPoliticalB; }
            if(cookieData.eradication.SocialPoliticalBDocumentation !== null){ eradicationArray.eradication.SocialPoliticalBDocumentation = cookieData.eradication.SocialPoliticalBDocumentation; }
            // Populate Fields
            switch(eradicationArray.eradication.SocialPoliticalB){
                case "#eradication_SocialPoliticalB_yes":
                    $('#eradication_SocialPoliticalB_yes').prop('checked', true);
                    destinationArray.forward = '3.3';
                    break;
                case "#eradication_SocialPoliticalB_no":
                    $('#eradication_SocialPoliticalB_no').prop('checked', true);
                    destinationArray.forward = '4.1';
                    break;
                case "#eradication_SocialPolitical_B_uncertain":
                    $('#eradication_SocialPoliticalB_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#eradication_SocialPoliticalB_documentation').prop('value', eradicationArray.eradication.SocialPoliticalBDocumentation);
            break;
        case "3.3":
            $('#content_step_strategy_exploration_eradication_SocialPoliticalC').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.eradication.SocialPoliticalC !== null){ eradicationArray.eradication.SocialPoliticalC = cookieData.eradication.SocialPoliticalC; }
            if(cookieData.eradication.SocialPoliticalCDocumentation !== null){ eradicationArray.eradication.SocialPoliticalCDocumentation = cookieData.eradication.SocialPoliticalCDocumentation; }
            // Populate Fields
            switch(eradicationArray.eradication.SocialPoliticalC){
                case "#eradication_SocialPoliticalC_yes":
                    $('#eradication_SocialPoliticalC_yes').prop('checked', true);
                    destinationArray.forward = '3.4';
                    break;
                case "#eraidcation_SocialPolitical_C_no":
                    $('#eradication_SocialPoliticalC_no').prop('checked', true);
                    destinationArray.forward = '4.1';
                    break;
                case "#eradication_SocialPoliticalC_uncertain":
                    $('#eradication_SocialPoliticalC_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#eradication_SocialPoliticalC_documentation').prop('value', eradicationArray.eradication.SocialPoliticalCDocumentation);
            break;
        case "3.4":
            $('#content_step_strategy_exploration_eradication_PreventingReproductionA').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.eradication.PreventingReproductionA !== null){ eradicationArray.eradication.PreventingReproductionA = cookieData.eradication.PreventingReproductionA; }
            if(cookieData.eradication.PreventingReproductionADocumentation !== null){ eradicationArray.eradication.PreventingReproductionADocumentation = cookieData.eradication.PreventingReproductionADocumentation; }
            // Populate Fields
            switch(eradicationArray.eradication.PreventingReproductionA){
                case "#eradication_PreventingReproductionA_yes":
                    $('#eradication_PreventingReproductionA_yes').prop('checked', true);
                    destinationArray.forward = '3.5';
                    break;
                case "#eradication_PreventingReproductionA_no":
                    $('#eradication_PreventingReproductionA_no').prop('checked', true);
                    destinationArray.forward = '4.1';
                    break;
                case "#eradication_PreventingReproductionA_uncertain":
                    $('#eradication_PreventingReproductionA_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#eradication_PreventingReproductionA_documentation').prop('value', eradicationArray.eradication.PreventingReproductionADocumentation);
            break;
        case "3.5":
            $('#content_step_strategy_exploration_eradication_PreventingReproductionB').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.eradication.PreventingReproductionB !== null){ eradicationArray.eradication.PreventingReproductionB = cookieData.eradication.PreventingReproductionB; }
            if(cookieData.eradication.PreventingReproductionBDocumentation !== null){ eradicationArray.eradication.PreventingReproductionBDocumentation = cookieData.eradication.PreventingReproductionBDocumentation; }
            // Populate Fields
            switch(eradicationArray.eradication.PreventingReproductionB){
                case "#eradication_PreventingReproductionB_yes":
                    $('#eradication_PreventingReproductionB_yes').prop('checked', true);
                    destinationArray.forward = '3.6';
                    break;
                case "#eradication_PreventingReproductionB_no":
                    $('#eradication_PreventingReproductionB_no').prop('checked', true);
                    destinationArray.forward = '4.1';
                    break;
                case "#eradication_PreventingReproductionB_uncertain":
                    $('#eradication_PreventingReproductionB_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#eradication_PreventingReproductionB_documentation').prop('value', eradicationArray.eradication.PreventingReproductionBDocumentation);
            break;
        case "3.6":
            $('#content_step_strategy_exploration_eradication_Detection').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.eradication.Detection !== null){ eradicationArray.eradication.Detection = cookieData.eradication.Detection; }
            if(cookieData.eradication.DetectionDocumentation !== null){ eradicationArray.eradication.DetectionDocumentation = cookieData.eradication.DetectionDocumentation; }
            // Populate Fields
            switch(eradicationArray.eradication.Detection){
                case "#eradication_Detection_yes":
                    $('#eradication_Detection_yes').prop('checked', true);
                    destinationArray.forward = '3.7';
                    break;
                case "#eradication_Detection_no":
                    $('#eradication_Detection_no').prop('checked', true);
                    destinationArray.forward = '4.1';
                    break;
                case "#eradication_Detection_uncertain":
                    $('#eradication_Detection_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#eradication_Detection_documentation').prop('value', eradicationArray.eradication.DetectionDocumentation);
            break;
        case "3.7":
            $('#content_step_strategy_exploration_eradication_EffectiveControlA').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.eradication.EffectiveControlA !== null){ eradicationArray.eradication.EffectiveControlA = cookieData.eradication.EffectiveControlA; }
            if(cookieData.eradication.EffectiveControlADocumentation !== null){ eradicationArray.eradication.EffectiveControlADocumentation = cookieData.eradication.EffectiveControlADocumentation; }
            if(cookieData.eradication.EffectiveControlAControlMethod !== null){ eradicationArray.eradication.EffectiveControlAControlMethod = cookieData.eradication.EffectiveControlAControlMethod; }
            if(cookieData.eradication.EffectiveControlAControlMethodDescription !== null){ eradicationArray.eradication.EffectiveControlAControlMethodDescription = cookieData.eradication.EffectiveControlAControlMethodDescription; }
            // Populate Fields
            switch(eradicationArray.eradication.EffectiveControlA){
                case "#eradication_EffectiveControlA_yes":
                    $('#eradication_EffectiveControlA_yes').prop('checked', true);
                    destinationArray.forward = '3.8';
                    break;
                case "#eradication_EffectiveControlA_no":
                    $('#eradication_EffectiveControlA_no').prop('checked', true);
                    destinationArray.forward = '4.1';
                    break;
                case "#eradication_EffectiveControlA_uncertain":
                    $('#eradication_EffectiveControlA_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#eradication_EffectiveControlA_documentation').prop('value', eradicationArray.eradication.EffectiveControlADocumentation);
            switch(eradicationArray.eradication.EffectiveControlAControlMethod){
                case "#eradication_EffectiveControlAControlMethod_manual":
                    $('#eradication_EffectiveControlAControlMethod_manual').prop('checked', true);
                    break;
                case "#eradication_EffectiveControlAControlMethod_mechanical":
                    $('#eradication_EffectiveControlAControlMethod_mechanical').prop('checked', true);
                    break;
                case "#eradication_EffectiveControlAControlMethod_herbicide":
                    $('#eradication_EffectiveControlAControlMethod_herbicide').prop('checked', true);
                    break;
                case "#eradication_EffectiveControlAControlMethod_biological":
                    $('#eradication_EffectiveControlAControlMethod_biological').prop('checked', true);
                    break;
                case "#eradication_EffectiveControlAControlMethod_other":
                    $('#eradication_EffectiveControlAControlMethod_other').prop('checked', true);
                    break;
            }
            $('#eradication_EffectiveControlAControlMethodDescription').prop('value', eradicationArray.eradication.EffectiveControlAControlMethodDescription);
            break;
        case "3.8":
            $('#content_step_strategy_exploration_eradication_EffectiveControlB').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.eradication.EffectiveControlB !== null){ eradicationArray.eradication.EffectiveControlB = cookieData.eradication.EffectiveControlB; }
            if(cookieData.eradication.EffectiveControlBDocumentation !== null){ eradicationArray.eradication.EffectiveControlBDocumentation = cookieData.eradication.EffectiveControlBDocumentation; }
            // Populate Fields
            switch(eradicationArray.eradication.EffectiveControlB){
                case "#eradication_EffectiveControlB_yes":
                    $('#eradication_EffectiveControlB_yes').prop('checked', true);
                    destinationArray.forward = '3.9';
                    break;
                case "#eradication_EffectiveControlB_no":
                    $('#eradication_EffectiveControlB_no').prop('checked', true);
                    destinationArray.forward = '4.1';
                    break;
                case "#eradication_EffectiveControlB_uncertain":
                    $('#eradication_EffectiveControlB_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#eradication_EffectiveControlB_documentation').prop('value', eradicationArray.eradication.EffectiveControlBDocumentation);
            break;
        case "3.9":
            $('#content_step_strategy_exploration_eradication_NontargetImpacts').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.eradication.NontargetImpacts !== null){ eradicationArray.eradication.NontargetImpacts = cookieData.eradication.NontargetImpacts; }
            if(cookieData.eradication.NontargetImpactsDocumentation !== null){ eradicationArray.eradication.NontargetImpactsDocumentation = cookieData.eradication.NontargetImpactsDocumentation; }
            // Populate Fields
            switch(eradicationArray.eradication.NontargetImpacts){
                case "#eradication_NontargetImpacts_yes":
                    $('#eradication_NontargetImpacts_yes').prop('checked', true);
                    // TODO: FIGURE SUMMARY RECOMMENDATION LOCATION
                    destinationArray.forward = 'TBD';
                    break;
                case "#eradication_NontargetImpacts_no":
                    $('#eradication_NontargetImpacts_no').prop('checked', true);
                    destinationArray.forward = '4.1';
                    break;
                case "#eradication_NontargetImpacts_uncertain":
                    $('#eradication_NontargetImpacts_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#eradication_NontargetImpacts_documentation').prop('value', eradicationArray.eradication.NontargetImpactsDocumentation);
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
            tempValue = formArray.eradication.SocialPoliticalA;
            nextStep = "#content_step_strategy_exploration_eradication_substep_two";
        }else if(currentStep === "3.2"){
            tempValue = formArray.eradication.SocialPoliticalB;
            nextStep = "#content_step_strategy_exploration_eradication_substep_three";
        }else if(currentStep === "3.3"){
            tempValue = formArray.eradication.SocialPoliticalC;
            nextStep = "#content_step_strategy_exploration_eradication_substep_four";
        }else if(currentStep === "3.4"){
            tempValue = formArray.eradication.PreventingReproductionA;
            nextStep = "#content_step_strategy_exploration_eradication_substep_five";
        }else if(currentStep === "3.5"){
            tempValue = formArray.eradication.PreventingReproductionB;
            nextStep = "#content_step_strategy_exploration_eradication_substep_six";
        }else if(currentStep === "3.6"){
            tempValue = formArray.eradication.Detection;
            nextStep = "#content_step_strategy_exploration_eradication_substep_seven";
        }else if(currentStep === "3.7"){
            tempValue = formArray.eradication.EffectiveControlA;
            nextStep = "#content_step_strategy_exploration_eradication_substep_eight";
        }else if(currentStep === "3.8"){
            tempValue = formArray.eradication.EffectiveControlB;
            nextStep = "#content_step_strategy_exploration_eradication_substep_nine";
        }else if(currentStep === "3.9"){
            tempValue = formArray.eradication.NontargetImpacts;
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
                eradication: {
                    SocialPoliticalA: eradicationArray.eradication.SocialPoliticalA,
                    SocialPoliticalADocumentation: eradicationArray.eradication.SocialPoliticalADocumentation
                }
            };
            requiredField = eradicationArray.eradication.SocialPoliticalA;
        }else if(currentStep === "3.2"){
            saveArray = {
                eradication: {
                    SocialPoliticalB: eradicationArray.eradication.SocialPoliticalB,
                    SocialPoliticalBDocumentation: eradicationArray.eradication.SocialPoliticalBDocumentation
                }
            };
            requiredField = eradicationArray.eradication.SocialPoliticalB;
        }else if(currentStep === "3.3"){
            saveArray = {
                eradication: {
                    SocialPoliticalC: eradicationArray.eradication.SocialPoliticalC,
                    SocialPoliticalCDocumentation: eradicationArray.eradication.SocialPoliticalCDocumentation
                }
            };
            requiredField = eradicationArray.eradication.SocialPoliticalC;
        }else if(currentStep === "3.4"){
            saveArray = {
                eradication: {
                    PreventingReproductionA: eradicationArray.eradication.PreventingReproductionA,
                    PreventingReproductionADocumentation: eradicationArray.eradication.PreventingReproductionADocumentation
                }
            };
            requiredField = eradicationArray.eradication.PreventingReproductionA;
        }else if(currentStep === "3.5"){
            saveArray = {
                eradication: {
                    PreventingReproductionB: eradicationArray.eradication.PreventingReproductionB,
                    PreventingReproductionBDocumentation: eradicationArray.eradication.PreventingReproductionBDocumentation
                }
            };
            requiredField = eradicationArray.eradication.PreventingReproductionB;
        }else if(currentStep === "3.6"){
            saveArray = {
                eradication: {
                    Detection: eradicationArray.eradication.Detection,
                    DetectionDocumentation: eradicationArray.eradication.DetectionDocumentation
                }
            };
            requiredField = eradicationArray.eradication.DetectionDocumentation;
        }else if(currentStep === "3.7"){
            saveArray = {
                eradication: {
                    EffectiveControlA: eradicationArray.eradication.EffectiveControlA,
                    EffectiveControlADocumentation: eradicationArray.eradication.EffectiveControlADocumentation,
                    EffectiveControlAControlMethod: eradicationArray.eradication.EffectiveControlAControlMethod,
                    EffectiveControlAControlMethodDescription: eradicationArray.eradication.EffectiveControlAControlMethodDescription
                }
            };
            requiredField = eradicationArray.eradication.EffectiveControlA;
        }else if(currentStep === "3.8"){
            saveArray = {
                eradication: {
                    EffectiveControlB: eradicationArray.eradication.EffectiveControlB,
                    EffectiveControlBDocumentation: eradicationArray.eradication.EffectiveControlBDocumentation
                }
            };
            requiredField = eradicationArray.eradication.EffectiveControlB;
        }else if(currentStep === "3.9"){
            saveArray = {
                eradication: {
                    NontargetImpacts: eradicationArray.eradication.NontargetImpacts,
                    NontargetImpactsDocumentation: eradicationArray.eradication.NontargetImpactsDocumentation
                }
            };
            requiredField = eradicationArray.eradication.NontargetImpacts;
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
                eradicationArray.eradication.SocialPoliticalA = '#eradication_SocialPoliticalA_yes';
                destinationArray.forward = '3.2'; break;
            case '#eradication_SocialPoliticalA_no':
                eradicationArray.eradication.SocialPoliticalA = '#eradication_SocialPoliticalA_no';
                destinationArray.forward = '4.1'; break;
            case '#eradication_SocialPoliticalA_uncertain':
                eradicationArray.eradication.SocialPoliticalA = '#eradication_SocialPoliticalA_uncertain';
                destinationArray.forward = 'none'; break;
            case '#eradication_SocialPoliticalB_yes':
                eradicationArray.eradication.SocialPoliticalB = '#eradication_SocialPoliticalB_yes';
                destinationArray.forward = '3.3'; break;
            case '#eradication_SocialPoliticalB_no':
                eradicationArray.eradication.SocialPoliticalB = '#eradication_SocialPoliticalB_no';
                destinationArray.forward = '4.1'; break;
            case '#eradication_SocialPoliticalB_uncertain':
                eradicationArray.eradication.SocialPoliticalB = '#eradication_SocialPoliticalB_uncertain';
                destinationArray.forward = 'none'; break;
            case '#eradication_SocialPoliticalC_yes':
                eradicationArray.eradication.SocialPoliticalC = '#eradication_SocialPoliticalC_yes';
                destinationArray.forward = '3.4'; break;
            case '#eradication_SocialPoliticalC_no':
                eradicationArray.eradication.SocialPoliticalC = '#eradication_SocialPoliticalC_no';
                destinationArray.forward = '4.1'; break;
            case '#eradication_SocialPoliticalC_uncertain':
                eradicationArray.eradication.SocialPoliticalC = '#eradication_SocialPoliticalC_uncertain';
                destinationArray.forward = 'none'; break;
            case '#eradication_PreventingReproductionA_yes':
                eradicationArray.eradication.PreventingReproductionA = '#eradication_PreventingReproductionA_yes';
                destinationArray.forward = '3.5'; break;
            case '#eradication_PreventingReproductionA_no':
                eradicationArray.eradication.PreventingReproductionA = '#eradication_PreventingReproductionA_no';
                destinationArray.forward = '4.1'; break;
            case '#eradication_PreventingReproductionA_uncertain':
                eradicationArray.eradication.PreventingReproductionA = '#eradication_PreventingReproductionA_uncertain';
                destinationArray.forward = 'none'; break;
            case '#eradication_PreventingReproductionB_yes':
                eradicationArray.eradication.PreventingReproductionB = '#eradication_PreventingReproductionB_yes';
                destinationArray.forward = '3.6'; break;
            case '#eradication_PreventingReproductionB_no':
                eradicationArray.eradication.PreventingReproductionB = '#eradication_PreventingReproductionB_no';
                destinationArray.forward = '4.1'; break;
            case '#eradication_PreventingReproductionB_uncertain':
                eradicationArray.eradication.PreventingReproductionB = '#eradication_PreventingReproductionB_uncertain';
                destinationArray.forward = 'none'; break;
            case '#eradication_Detection_yes':
                eradicationArray.eradication.Detection = '#eradication_Detection_yes';
                destinationArray.forward = '3.7'; break;
            case '#eradication_Detection_no':
                eradicationArray.eradication.Detection = '#eradication_Detection_no';
                destinationArray.forward = '4.1'; break;
            case '#eradication_Detection_uncertain':
                eradicationArray.eradication.Detection = '#eradication_Detection_uncertain';
                destinationArray.forward = 'none'; break;
            case '#eradication_EffectiveControlA_yes':
                eradicationArray.eradication.EffectiveControlA = '#eradication_EffectiveControlA_yes';
                destinationArray.forward = '3.8'; break;
            case '#eradication_EffectiveControlA_no':
                eradicationArray.eradication.EffectiveControlA = '#eradication_EffectiveControlA_no';
                destinationArray.forward = '4.1'; break;
            case '#eradication_EffectiveControlA_uncertain':
                eradicationArray.eradication.EffectiveControlA = '#eradication_EffectiveControlA_uncertain';
                destinationArray.forward = 'none'; break;
            case '#eradication_EffectiveControlAControlMethod_manual':
                eradicationArray.eradication.EffectiveControlAControlMethod = '#eradication_EffectiveControlAControlMethod_manual';
                break;
            case '#eradication_EffectiveControlAControlMethod_mechanical':
                eradicationArray.eradication.EffectiveControlAControlMethod = '#eradication_EffectiveControlAControlMethod_mechancial';
                break;
            case '#eradication_EffectiveControlAControlMethod_herbicide':
                eradicationArray.eradication.EffectiveControlAControlMethod = '#eradication_EffectiveControlAControlMethod_herbicide';
                break;
            case '#eradication_EffectiveControlAControlMethod_biological':
                eradicationArray.eradication.EffectiveControlAControlMethod = '#eradication_EffectiveControlAControlMethod_biological';
                break;
            case '#eradication_EffectiveControlAControlMethod_other':
                eradicationArray.eradication.EffectiveControlAControlMethod = '#eradication_EffectiveControlAControlMethod_other';
                break;
            case '#eradication_EffectiveControlB_yes':
                eradicationArray.eradication.EffectiveControlB = '#eradication_EffectiveControlB_yes';
                destinationArray.forward = '3.9'; break;
            case '#eradication_EffectiveControlB_no':
                eradicationArray.eradication.EffectiveControlB = '#eradication_EffectiveControlB_no';
                destinationArray.forward = '4.1'; break;
            case '#eradication_EffectiveControlB_uncertain':
                eradicationArray.eradication.EffectiveControlB = '#eradication_EffectiveControlB_uncertain';
                destinationArray.forward = 'none'; break;
            case '#eradication_NontargetImpacts_yes':
                eradicationArray.eradication.NontargetImpacts = '#eradication_NontargetImpacts_yes';
                destinationArray.forward = 'none'; break;
            case '#eradication_NontargetImpacts_no':
                eradicationArray.eradication.NontargetImpacts = '#eradication_NontargetImpacts_no';
                destinationArray.forward = '4.1'; break;
            case '#eradication_NontargetImpacts_uncertain':
                eradicationArray.eradication.NontargetImpacts = '#eradication_NontargetImpacts_uncertain';
                destinationArray.forward = 'none'; break;
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
                    if(destinationArray.forward === '4.1'){
                        Popup('eradication', 'containment', '', destinationArray.current, cookieData, completedSteps, currentStep);
                    }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.forward);
                }
            }else{
                Popup(null, null, '');
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
    switch(currentStep){
        case "3.1":
            Add_Event_To_Field('#eradication_SocialPoliticalA_documentation');
            $('#eradication_SocialPoliticalA_yes').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalA_yes'); });
            $('#eradication_SocialPoliticalA_no').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalA_no'); });
            $('#eradication_SocialPoliticalA_uncertain').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalA_uncertain'); });
            // Determine where back will point to
            var tempBack;
            switch(cookieData.strategySelection.AbundanceAndDistributionConfirm){
                case "#strategy_confirmation_yes":
                    tempBack = '2.3';
                    break;
                case "#strategy_confirmation_no":
                    tempBack = '2.4';
                    break;
            }
            destinationArray.back = tempBack;
            destinationArray.current = '3.1';
            destinationArray.substep_one = 'none';
            break;
        case "3.2":
            Add_Event_To_Field('#eradication_SocialPoliticalB_documentation');
            $('#eradication_SocialPoliticalB_yes').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalB_yes'); });
            $('#eradication_SocialPoliticalB_no').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalB_no'); });
            $('#eradication_SocialPoliticalB_uncertain').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalB_uncertain'); });
            destinationArray.back = '3.1';
            destinationArray.current = '3.2';
            destinationArray.substep_two = 'none';
            break;
        case "3.3":
            Add_Event_To_Field('#eradication_SocialPoliticalC_documentation');
            $('#eradication_SocialPoliticalC_yes').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalC_yes'); });
            $('#eradication_SocialPoliticalC_no').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalC_no'); });
            $('#eradication_SocialPoliticalC_uncertain').change(function(){ Eradication_Check_Boxes('#eradication_SocialPoliticalC_uncertain'); });
            destinationArray.back = '3.2';
            destinationArray.current = '3.3';
            destinationArray.substep_three = 'none';
            break;
        case "3.4":
            Add_Event_To_Field('#eradication_PreventingReproductionA_documentation');
            $('#eradication_PreventingReproductionA_yes').change(function(){ Eradication_Check_Boxes('#eradication_PreventingReproductionA_yes'); });
            $('#eradication_PreventingReproductionA_no').change(function(){ Eradication_Check_Boxes('#eradication_PreventingReproductionA_no'); });
            $('#eradication_PreventingReproductionA_uncertain').change(function(){ Eradication_Check_Boxes('#eradication_PreventingReproductionA_uncertain'); });
            destinationArray.back = '3.3';
            destinationArray.current = '3.4';
            destinationArray.substep_four = 'none';
            break;
        case "3.5":
            Add_Event_To_Field('#eradication_PreventingReproductionB_documentation');
            $('#eradication_PreventingReproductionB_yes').change(function(){ Eradication_Check_Boxes('#eradication_PreventingReproductionB_yes'); });
            $('#eradication_PreventingReproductionB_no').change(function(){ Eradication_Check_Boxes('#eradication_PreventingReproductionB_no'); });
            $('#eradication_PreventingReproductionB_uncertain').change(function(){ Eradication_Check_Boxes('#eradication_PreventingReproductionB_uncertain'); });
            destinationArray.back = '3.4';
            destinationArray.current = '3.5';
            destinationArray.substep_five = 'none';
            break;
        case "3.6":
            Add_Event_To_Field('#eradication_Detection_documentation');
            $('#eradication_Detection_yes').change(function(){ Eradication_Check_Boxes('#eradication_Detection_yes'); });
            $('#eradication_Detection_no').change(function(){ Eradication_Check_Boxes('#eradication_Detection_no'); });
            $('#eradication_Detection_uncertain').change(function(){ Eradication_Check_Boxes('#eradication_Detection_uncertain'); });
            destinationArray.back = '3.5';
            destinationArray.current = '3.6';
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
            destinationArray.substep_seven = 'none';
            break;
        case "3.8":
            Add_Event_To_Field('#eradication_EffectiveControlB_documentation');
            $('#eradication_EffectiveControlB_yes').change(function(){ Eradication_Check_Boxes('#eradication_EffectiveControlB_yes'); });
            $('#eradication_EffectiveControlB_no').change(function(){ Eradication_Check_Boxes('#eradication_EffectiveControlB_no'); });
            $('#eradication_EffectiveControlB_uncertain').change(function(){ Eradication_Check_Boxes('#eradication_EffectiveControlB_uncertain'); });
            destinationArray.back = '3.7';
            destinationArray.current = '3.8';
            destinationArray.substep_eight = 'none';
            break;
        case "3.9":
            Add_Event_To_Field('#eradication_NontargetImpacts_documentation');
            $('#eradication_NontargetImpacts_yes').change(function(){ Eradication_Check_Boxes('#eradication_NontargetImpacts_yes'); });
            $('#eradication_NontargetImpacts_no').change(function(){ Eradication_Check_Boxes('#eradication_NontargetImpacts_no'); });
            $('#eradication_NontargetImpacts_uncertain').change(function(){ Eradication_Check_Bxoes('#eradication_NontargetImpacts_uncertain'); });
            destinationArray.back = '3.8';
            destinationArray.current = '3.9';
            destinationArray.substep_eight = 'none';
            break;
    }
    Add_Event_To_Nav(destinationArray);
};
/***********************************************\
 * Step(3) - Containment                       *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s)*
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Strategy_Exploration_Containment(cookieData, completedSteps, currentStep){
    // ------------------------------------------------------------- \\
    // FUNCTION LAYOUT                                               \\
    // ------------------------------------------------------------- \\
    // 1 -  Declare variables                                        \\
    // 2 -  Declare subcategory values (If applicable)               \\
    // 3 -  Ensure correct step container is displayed,              \\
    //      Check if loading data (Check -> Load -> Populate Fields) \\
    // 4 -  Function - Containment_Substep_Form_Check(formArray)     \\
    // 5 -  Function - Containment_Substep_Save()                    \\
    // 6 -  Function - Containment_Check_Boxes(boxName)              \\
    // 7 -  Function - Add_Event_To_Field(fieldLocation, substep)    \\
    // 8 -  Function - Add_Event_To_Nav(destinationArray)            \\
    // 9 -  Populate/Execute - Add_Event_To_Field, Add_Event_To_Nav  \\
    // ------------------------------------------------------------- \\
    // 1 -  Declare variables                                        \\
    var containmentArray = {
            containment: {
                SocialPoliticalA: null,
                SocialPoliticalADocumentation: null,
                SocialPoliticalB: null,
                SocialPoliticalBDocumentation: null,
                PreventingReproductionA: null,
                PreventingReproductionADocumentation: null,
                PreventingReproductionB: null,
                PreventingReproductionBDocumentation: null,
                DetectingSmall: null,
                DetectingSmallDocumentation: null,
                EffectiveControlA: null,
                EffectiveControlADocumentation: null,
                EffectiveControlAControlMethod: null,
                EffectiveControlAControlMethodDescription: null,
                EffectiveControlB: null,
                EffectiveControlBDocumentation: null,
                NontargetImpacts: null,
                NontargetImpactsDocumentation: null
            }
        },
        saveArray = {},
        destinationArray = {
            substep_one: '4.1',
            substep_two: '4.2',
            substep_three: '4.3',
            substep_four: '4.4',
            substep_five: '4.5',
            substep_six: '4.6',
            substep_seven: '4.7',
            substep_eight: '4.8',
            projectBackground: '1.1',
            strategySelection: '2.1',
            strategyExploration: 'none'
        };
    // 2 -  Declare subcategory values (If applicable)               \\
    // 3 -  Ensure correct step container is displayed,              \\
    //      Check if loading data (Check -> Load -> Populate Fields) \\
    $('#content_nav_back').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
    switch(currentStep){
        case "4.1":
            // Display the step
            $('#content_step_strategy_exploration_containment_SocialPoliticalA').removeClass('content_step_inactive').addClass('content_step_active');
            // Check if data is present
            if(cookieData.containment.SocialPoliticalA !== null){ containmentArray.containment.SocialPoliticalA = cookieData.containment.SocialPoliticalA; }
            if(cookieData.containment.SocialPoliticalADocumentation !== null){ containmentArray.containment.SocialPoliticalADocumentation = cookieData.containment.SocialPoliticalADocumentation; }
            // Populate fields
            switch(containmentArray.containment.SocialPoliticalA){
                case "#containment_SocialPoliticalA_yes":
                    $('#containment_SocialPoliticalA_yes').prop('checked', true);
                    destinationArray.forward = '4.2';
                    break;
                case "#containment_SocialPoliticalA_no":
                    $('#containment_SocialPoliticalA_no').prop('checked', true);
                    destinationArray.forward = '5.1';
                    break;
                case "#containment_SocialPoliticalA_uncertain":
                    $('#containment_SocialPoliticalA_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#containment_SocialPoliticalA_documentation').prop('value', containmentArray.containment.SocialPoliticalADocumentation);
            break;
        case "4.2":
            // Display the step
            $('#content_step_strategy_exploration_containment_SocialPoliticalB').removeClass('content_step_inactive').addClass('content_step_active');
            // Check if data is present
            if(cookieData.containment.SocialPoliticalB !== null){ containmentArray.containment.SocialPoliticalB = cookieData.containment.SocialPoliticalB; }
            if(cookieData.containment.SocialPoliticalBDocumentation !== null){ containmentArray.containment.SocialPoliticalBDocumentation = cookieData.containment.SocialPoliticalBDocumentation; }
            // Populate fields
            switch(containmentArray.containment.SocialPoliticalB){
                case "#containment_SocialPoliticalB_yes":
                    $('#containment_SocialPoliticalB_yes').prop('checked', true);
                    destinationArray.forward = '4.3';
                    break;
                case "#containment_SocialPoliticalB_no":
                    $('#containment_SocialPoliticalB_no').prop('checked', true);
                    destinationArray.forward = '5.1';
                    break;
                case "#containment_SocialPoliticalB_uncertain":
                    $('#containment_SocialPoliticalB_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#containment_SocialPoliticalB_documentation').prop('value', containmentArray.containment.SocialPoliticalBDocumentation);
            break;
        case "4.3":
            // Display the step
            $('#content_step_strategy_exploration_containment_PreventingReproductionA').removeClass('content_step_inactive').addClass('content_step_active');
            // Check if data is present
            if(cookieData.containment.PreventingReproductionA !== null){ containmentArray.containment.PreventingReproductionA = cookieData.containment.PreventingReproductionA; }
            if(cookieData.containment.PreventingReproductionADocumentation !== null){ containmentArray.containment.PreventingReproductionADocumentation = cookieData.containment.PreventingReproductionADocumentation; }
            // Populate fields
            switch(containmentArray.containment.PreventingReproductionA){
                case "#containment_PreventingReproductionA_yes":
                    $('#containment_PreventingReproductionA_yes').prop('checked', true);
                    destinationArray.forward = '4.4';
                    break;
                case "#containment_PreventingReproductionA_no":
                    $('#containment_PreventingReproductionA_no').prop('checked', true);
                    destinationArray.forward = '5.1';
                    break;
                case "#containment_PreventingReproductionA_uncertain":
                    $('#containment_PreventingReproductionA_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#containment_PreventingReproductionA_documentation').prop('value', containmentArray.containment.PreventingReproductionADocumentation);
            break;
        case "4.4":
            // Display the step
            $('#content_step_strategy_exploration_containment_PreventingReproductionB').removeClass('content_step_inactive').addClass('content_step_active');
            // Check if data is present
            if(cookieData.containment.PreventingReproductionB !== null){ containmentArray.containment.PreventingReproductionB = cookieData.containment.PreventingReproductionB; }
            if(cookieData.containment.PreventingReproductionBDocumentation !== null){ containmentArray.containment.PreventingReproductionBDocumentation = cookieData.containment.PreventingReproductionBDocumentation; }
            // Populate fields
            switch(containmentArray.containment.PreventingReproductionB){
                case "#containment_PreventingReproductionB_yes":
                    $('#containment_PreventingReproductionB_yes').prop('checked', true);
                    destinationArray.forward = '4.5';
                    break;
                case "#containment_PreventingReproductionB_no":
                    $('#containment_PreventingReproductionB_no').prop('checked', true);
                    destinationArray.forward = '5.1';
                    break;
                case "#containment_PreventingReproductionB_uncertain":
                    $('#containment_PreventingReproductionB_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#containment_PreventingReproductionB_documentation').prop('value', containmentArray.containment.PreventingReproductionBDocumentation);
            break;
        case "4.5":
            // Display the step
            $('#content_step_strategy_exploration_containment_DetectingSmall').removeClass('content_step_inactive').addClass('content_step_active');
            // Check if data is present
            if(cookieData.containment.DetectingSmall !== null){ containmentArray.containment.DetectingSmall = cookieData.containment.DetectingSmall; }
            if(cookieData.containment.DetectingSmallDocumentation !== null){ containmentArray.containment.DetectingSmallDocumentation = cookieData.containment.DetectingSmallDocumentation; }
            // Populate fields
            switch(containmentArray.containment.DetectingSmall){
                case "#containment_DetectingSmall_yes":
                    $('#containment_DetectingSmall_yes').prop('checked', true);
                    destinationArray.forward = '4.6';
                    break;
                case "#containment_DetectingSmall_no":
                    $('#containment_DetectingSmall_no').prop('checked', true);
                    destinationArray.forward = '5.1';
                    break;
                case "#containment_DetectingSmall_uncertain":
                    $('#containment_DetectingSmall_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#containment_DetectingSmall_documentation').prop('value', containmentArray.containment.DetectingSmallDocumentation);
            break;
        case "4.6":
            // Display the step
            $('#content_step_strategy_exploration_containment_EffectiveControlA').removeClass('content_step_inactive').addClass('content_step_active');
            // Check if data is present
            if(cookieData.containment.EffectiveControlA !== null){ containmentArray.containment.EffectiveControlA = cookieData.containment.EffectiveControlA; }
            if(cookieData.containment.EffectiveControlADocumentation !== null){ containmentArray.containment.EffectiveControlADocumentation = cookieData.containment.EffectiveControlADocumentation; }
            if(cookieData.containment.EffectiveControlAControlMethod !== null){ containmentArray.containment.EffectiveControlAControlMethod = cookieData.containment.EffectiveControlAControlMethod; }
            if(cookieData.containment.EffectiveControlAControlMethodDescription !== null){ containmentArray.containment.EffectiveControlAControlMethodDescription = cookieData.containment.EffectiveControlAControlMethodDescription; }
            // Populate fields
            switch(containmentArray.containment.EffectiveControlA){
                case "#containment_EffectiveControlA_yes":
                    $('#containment_EffectiveControlA_yes').prop('checked', true);
                    destinationArray.forward = '4.7';
                    break;
                case "#containment_EffectiveControlA_no":
                    $('#containment_EffectiveControlA_no').prop('checked', true);
                    destinationArray.forward = '5.1';
                    break;
                case "#containment_EffectiveControlA_uncertain":
                    $('#containment_EffectiveControlA_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#containment_EffectiveControlA_documentation').prop('value', containmentArray.containment.EffectiveControlADocumentation);
            // TODO: This may not be working properly, need to test and debug
            //      the cases.
            switch(containmentArray.containment.EffectiveControlAControlMethod){
                case "#containment_EffectiveControlAControlMethod_manual":
                    $('#containment_EffectiveControlAControlMethod_manual').prop('checked', true);
                    break;
                case "#containment_EffectiveControlAControlMethod_mechanical":
                    $('#containment_EffecitveControlAControlMethod_mechanical').prop('checked', true);
                    break;
                case "#containment_EffectiveControlAControlMethod_herbicide":
                    $('#containment_EffectiveControlAControlMethod_herbicide').prop('checked', true);
                    break;
                case "#containment_EffectiveControlAControlMethod_biological":
                    $('#containment_EffectiveControlAControlMethod_biological').prop('checked', true);
                    break;
                case "#containment_EffectiveControlAControlMethod_other":
                    $('#containment_EffectiveControlAControlMethod_other').prop('checked', true);
                    break;
            }
            $('#containment_EffectiveControlAControlMethodDescription').prop('value', containmentArray.containment.EffectiveControlAControlMethodDescription);
            break;
        case "4.7":
            // Display the step
            $('#content_step_strategy_exploration_containment_EffectiveControlB').removeClass('content_step_inactive').addClass('content_step_active');
            // Check if data is present
            if(cookieData.containment.EffectiveControlB !== null){ containmentArray.containment.EffectiveControlB = cookieData.containment.EffectiveControlB; }
            if(cookieData.containment.EffectiveControlBDocumentation !== null){ containmentArray.containment.EffectiveControlBDocumentation = cookieData.containment.EffectiveControlBDocumentation; }
            // Populate fields
            switch(containmentArray.containment.EffectiveControlB){
                case "#containment_EffectiveControlB_yes":
                    $('#containment_EffectiveControlB_yes').prop('checked', true);
                    destinationArray.forward = '4.8';
                    break;
                case "#containment_EffectiveControlB_no":
                    $('#containment_EffectiveControlB_no').prop('checked', true);
                    destinationArray.forward = '5.1';
                    break;
                case "#containment_EffectiveControlB_uncertain":
                    $('#containment_EffectiveControlB_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#containment_EffectiveControlB_documentation').prop('value', containmentArray.containment.EffectiveControlBDocumentation);
            break;
        case "4.8":
            // Display the step
            $('#content_step_strategy_exploration_containment_NontargetImpacts').removeClass('content_step_inactive').addClass('content_step_active');
            // Check if data is present
            if(cookieData.containment.NontargetImpacts !== null){ containmentArray.containment.NontargetImpacts = cookieData.containment.NontargetImpacts; }
            if(cookieData.containment.NontargetImpactsDocumentation !== null){ containmentArray.containment.NontargetImpactsDocumentation = cookieData.containment.NontargetImpactsDocumentation; }
            // Populate fields
            switch(containmentArray.containment.NontargetImpacts){
                case "#containment_NontargetImpacts_yes":
                    $('#containment_NontargetImpacts_yes').prop('checked', true);
                    // TODO: TBD DESTINATION
                    destinationArray.forward = 'TBD';
                    break;
                case "#containment_NontargetImpacts_no":
                    $('#containment_NontargetImpacts_no').prop('checked', true);
                    destinationArray.forward = '5.1';
                    break;
                case "#containment_NontargetImpacts_uncertain":
                    $('#containment_NontargetImpacts_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#containment_NontargetImpacts_documentation').prop('value', containmentArray.containment.NontargetImpacts);
            break;
    }
    // 4 -  Function - Containment_Substep_Form_Check(formArray)     \\
    function Containment_Substep_Form_Check(formArray){
        var tempValue,
            nextStep;
        // Setup Values
        if(currentStep === "4.1"){
            tempValue = formArray.containment.SocialPoliticalA;
            nextStep = "#content_step_strategy_exploration_containment_substep_two";
        }else if(currentStep === "4.2"){
            tempValue = formArray.containment.SocialPoliticalB;
            nextStep = "#content_step_strategy_exploration_containment_substep_three";
        }else if(currentStep === "4.3"){
            tempValue = formArray.containment.PreventingReproductionA;
            nextStep = "#content_step_strategy_exploration_containment_substep_four";
        }else if(currentStep === "4.4"){
            tempValue = formArray.containment.PreventingReproductionB;
            nextStep = "#content_step_strategy_exploration_containment_substep_five";
        }else if(currentStep === "4.5"){
            tempValue = formArray.containment.DetectingSmall;
            nextStep = "#content_step_strategy_exploration_containment_substep_six";
        }else if(currentStep === "4.6"){
            tempValue = formArray.containment.SocialPoliticalA;
            nextStep = "#content_step_strategy_exploration_containment_substep_seven";
        }else if(currentStep === "4.7"){
            tempValue = formArray.containment.SocialPoliticalB;
            nextStep = "#content_step_strategy_exploration_containment_substep_eight";
        }else if(currentStep === "4.8"){
            tempValue = formArray.containment.NontargetImpacts;
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
    // 5 -  Function - Containment_Substep_Save()                    \\
    function Containment_Substep_Save(){
        var saveArray,
            requiredField,
            tempPush = currentStep;
        // Setup Values
        if(currentStep === "4.1"){
            saveArray = {
                containment: {
                    SocialPoliticalA: containmentArray.containment.SocialPoliticalA,
                    SocialPoliticalADocumentation: containmentArray.containment.SocialPoliticalADocumentation
                }
            };
            requiredField = containmentArray.containment.SocialPoliticalA;
        }else if(currentStep === "4.2"){
            saveArray = {
                containment: {
                    SocialPoliticalB: containmentArray.containment.SocialPoliticalB,
                    SocialPoliticalBDocumentation: containmentArray.containment.SocialPoliticalBDocumentation
                }
            };
            requiredField = containmentArray.containment.SocialPoliticalB;
        }else if(currentStep === "4.3"){
            saveArray = {
                containment: {
                    PreventingReproductionA: containmentArray.containment.PreventingReproductionA,
                    PreventingReproductionADocumentation: containmentArray.containment.PreventingReproductionADocumentation
                }
            };
            requiredField = containmentArray.containment.PreventingReproductionA;
        }else if(currentStep === "4.4"){
            saveArray = {
                containment: {
                    PreventingReproductionB: containmentArray.containment.PreventingReproductionB,
                    PreventingReproductionBDocumentation: containmentArray.containment.PreventingReproductionBDocumentation
                }
            };
            requiredField = containmentArray.containment.PreventingReproductionB;
        }else if(currentStep === "4.5"){
            saveArray = {
                containment: {
                    DetectingSmall: containmentArray.containment.DetectingSmall,
                    DetectingSmallDocumentation: containmentArray.containment.DetectingSmallDocumentation
                }
            };
            requiredField = containmentArray.containment.DetectingSmall;
        }else if(currentStep === "4.6"){
            saveArray = {
                containment: {
                    EffectiveControlA: containmentArray.containment.EffectiveControlA,
                    EffectiveControlADocumentation: containmentArray.containment.EffectiveControlADocumentation,
                    EffectiveControlAControlMethod: containmentArray.containment.EffectiveControlAControlMethod,
                    EffectiveControlAControlMethodDescription: containmentArray.containment.EffectiveControlAControlMethodDescription
                }
            };
            requiredField = containmentArray.containment.EffectiveControlA;
        }else if(currentStep === "4.7"){
            saveArray = {
                containment: {
                    EffectiveControlB: containmentArray.containment.EffectiveControlB,
                    EffectiveControlBDocumentation: containmentArray.containment.EffectiveControlBDocumentation
                }
            };
            requiredField = containmentArray.containment.EffectiveControlB;
        }else if(currentStep === "4.8"){
            saveArray = {
                containment: {
                    NontargetImpacts: containmentArray.containment.NontargetImpacts,
                    NontargetImpactsDocumentation: containmentArray.containment.NontargetImpactsDocumentation
                }
            };
            requiredField = containmentArray.containment.NontargetImpacts;
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
    // 6 -  Function - Containment_Check_Boxes(boxName)              \\
    function Containment_Check_Boxes(boxName){
        // This is an onClick type function. We need to be certain that no other
        //      boxes in the same category are checked when we save the value.
        if(currentStep === "4.1"){
            $('#containment_SocialPoliticalA_yes').prop('checked', false);
            $('#containment_SocialPoliticalA_no').prop('checked', false);
            $('#containment_SocialPoliticalA_uncertain').prop('checked', false);
        }else if(currentStep === "4.2"){
            $('#containment_SocialPoliticalB_yes').prop('checked', false);
            $('#containment_SocialPoliticalB_no').prop('checked', false);
            $('#containment_SocialPoliticalB_uncertain').prop('checked', false);
        }else if(currentStep === "4.3"){
            $('#containment_PreventingReproductionA_yes').prop('checked', false);
            $('#containment_PreventingReproductionA_no').prop('checked', false);
            $('#containment_PreventingReproductionA_uncertain').prop('checked', false);
        }else if(currentStep === "4.4"){
            $('#containment_PreventingReproductionB_yes').prop('checked', false);
            $('#containment_PreventingReproductionB_no').prop('checked', false);
            $('#containment_PreventingReproductionB_uncertain').prop('checked', false);
        }else if(currentStep === "4.5"){
            $('#containment_DetectingSmall_yes').prop('checked', false);
            $('#containment_DetectingSmall_no').prop('checked', false);
            $('#containment_DetectingSmall_uncertain').prop('checked', false);
        }else if(currentStep === "4.6"){
            if((boxName === '#containment_EffectiveControlA_yes')||(boxName === '#containment_EffectiveControlA_no')||('#containment_EffectiveControlA_uncertain')){
                $('#containment_EffectiveControlA_yes').prop('checked', false);
                $('#containment_EffectiveControlA_no').prop('checked', false);
                $('#containment_EffectiveControlA_uncertain').prop('checked', false);
            }else{
                $('#containment_EffectiveControlAControlMethod_manual').prop('checked', false);
                $('#containment_EffectiveControlAControlMethod_mechanical').prop('checked', false);
                $('#containment_EffectiveControlAControlMethod_herbicide').prop('checked', false);
                $('#containment_EffectiveControlAControlMethod_biological').prop('checked', false);
                $('#containment_EffectiveControlAControlMethod_other').prop('checked', false);
            }
        }else if(currentStep === "4.7"){
            $('#containment_EffectiveControlB_yes').prop('checked', false);
            $('#containment_EffectiveControlB_no').prop('checked', false);
            $('#containment_EffectiveControlB_uncertain').prop('checked', false);
        }else if(currentStep === "4.8"){
            $('#containment_NontargetImpacts_yes').prop('checked', false);
            $('#containment_NontargetImpacts_no').prop('checked', false);
            $('#containment_NontargetImpacts_uncertain').prop('checked', false);
        }
        // Check the boxName
        $(boxName).prop('checked', true);
        // Assign the value
        switch(boxName){
            case '#containment_SocialPoliticalA_yes':
                containmentArray.containment.SocialPoliticalA = '#containment_SocialPoliticalA_yes';
                destinationArray.forward = '4.2'; break;
            case '#containment_SocialPoliticalA_no':
                containmentArray.containment.SocialPoliticalA = '#containment_SocialPoliticalA_no';
                destinationArray.forward = '5.1'; break;
            case '#containment_SocialPoliticalA_uncertain':
                containmentArray.containment.SocialPoliticalA = '#containment_SocialPoliticalA_uncertain';
                destinationArray.forward = 'none'; break;
            case '#containment_SocialPoliticalB_yes':
                containmentArray.containment.SocialPoliticalB = '#containment_SocialPoliticalB_yes';
                destinationArray.forward = '4.3'; break;
            case '#containment_SocialPoliticalB_no':
                containmentArray.containment.SocialPoliticalB = '#containment_SocialPoliticalB_no';
                destinationArray.forward = '5.1'; break;
            case '#containment_SocialPoliticalB_uncertain':
                containmentArray.containment.SocialPoliticalB = '#containment_SocialPoliticalB_uncertain';
                destinationArray.forward = 'none'; break;
            case '#containment_PreventingReproductionA_yes':
                containmentArray.containment.PreventingReproductionA = '#containment_PreventingReproductionA_yes';
                destinationArray.forward = '4.4'; break;
            case '#containment_PreventingReproductionA_no':
                containmentArray.containment.PreventingReproductionA = '#containment_PreventingReproductionA_no';
                destinationArray.forward = '5.1'; break;
            case '#containment_PreventingReproductionA_uncertain':
                containmentArray.containment.PreventingReproductionA = '#containment_PreventingReproductionA_uncertain';
                destinationArray.forward = 'none'; break;
            case '#containment_PreventingReproductionB_yes':
                containmentArray.containment.PreventingReproductionB = '#containment_PreventingReproductionB_yes';
                destinationArray.forward = '4.5'; break;
            case '#containment_PreventingReproductionB_no':
                containmentArray.containment.PreventingReproductionB = '#containment_PreventingReproductionB_no';
                destinationArray.forward = '5.1'; break;
            case '#containment_PreventingReproductionB_uncertain':
                containmentArray.containment.PreventingReproductionB = '#containment_PreventingReproductionB_uncertain';
                destinationArray.forward = 'none'; break;
            case '#containment_DetectingSmall_yes':
                containmentArray.containment.DetectingSmall = '#containment_DetectingSmall_yes';
                destinationArray.forward = '4.6'; break;
            case '#containment_DetectingSmall_no':
                containmentArray.containment.DetectingSmall = '#containment_DetectingSmall_no';
                destinationArray.forward = '5.1'; break;
            case '#containment_DetectingSmall_uncertain':
                containmentArray.containment.DetectingSmall = '#containment_DetectingSmall_uncertain';
                destinationArray.forward = 'none'; break;
            case '#containment_EffectiveControlA_yes':
                containmentArray.containment.EffectiveControlA = '#containment_EffectiveControlA_yes';
                destinationArray.forward = '4.7'; break;
            case '#containment_EffectiveControlA_no':
                containmentArray.containment.EffectiveControlA = '#containment_EffectiveControlA_no';
                destinationArray.forward = '5.1'; break;
            case '#containment_EffectiveControlA_uncertain':
                containmentArray.containment.EffecitveControlA = '#containment_EffectiveControlA_uncertain';
                destinationArray.forward = 'none'; break;
            case '#containment_EffectiveControlAControlMethod_manual':
                containmentArray.containment.EffectiveControlAControlMethod = '#containment_EffectiveControlAControlMethod_manual'; break;
            case '#containment_EffectiveControlAControlMethod_mechanical':
                containmentArray.containment.EffectiveControlAControlMethod = '#containment_EffectiveControlAControlMethod_mechanical'; break;
            case '#containment_EffectiveControlAControlMethod_herbicide':
                containmentArray.containment.EffectiveControlAControlMethod = '#containment_EffectiveControlAControlMethod_herbicide'; break;
            case '#containment_EffectiveControlAControlMethod_biological':
                containmentArray.containment.EffectiveControlAControlMethod = '#containment_EffectiveControlAControlMethod_biological'; break;
            case '#containment_EffectiveControlAControlMethod_other':
                containmentArray.containment.EffectiveControlAControlMethod = '#containment_EffectiveControlAControlMethod_other'; break;
            case '#containment_EffectiveControlB_yes':
                containmentArray.containment.EffectiveControlB = '#containment_EffectiveControlB_yes';
                destinationArray.forward = '4.8'; break;
            case '#containment_EffectiveControlB_no':
                containmentArray.containment.EffectiveControlB = '#containment_EffectiveControlB_no';
                destinationArray.forward = '5.1'; break;
            case '#containment_EffectiveControlB_uncertain':
                containmentArray.containment.EffecitveControlB = '#containment_EffectiveControlB_uncertain';
                destinationArray.forward = 'none'; break;
            case '#containment_NontargetImpacts_yes':
                containmentArray.containment.NontargetImpacts = '#containment_NontargetImpacts_yes';
                destinationArray.forward = 'none'; break;
            case '#containment_NontargetImpacts_no':
                containmentArray.containment.NontargetImpacts = '#containment_NontargetImpacts_no';
                destinationArray.forward = '5.1'; break;
            case '#containment_NontargetImpacts_uncertain':
                containmentArray.containment.NontargetImpacts = '#containment_NontargetImpacts_uncertain';
                destinationArray.forward = 'none'; break;
        }
        Containment_Substep_Form_Check(containmentArray);
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
            switch(fieldLocation){
                case '#containment_SocialPoliticalA_documentation':
                    containmentArray.containment.SocialPoliticalADocumentation = tempHolder; break;
                case '#containment_SocialPoliticalB_documentation':
                    containmentArray.containment.SocialPoliticalBDocumentation = tempHolder; break;
                case '#containment_PreventingReproductionA_documentation':
                    containmentArray.containment.PreventingReproductionADocumentation = tempHolder; break;
                case '#containment_PreventingReproductionB_documentation':
                    containmentArray.containment.PreventingReproductionBDocumentation = tempHolder; break;
                case '#containment_DetectingSmall_documentation':
                    containmentArray.containment.DetectingSmallDocumentation = tempHolder; break;
                case '#containment_EffectiveControlA_documentation':
                    containmentArray.containment.EffectiveControlADocumentation = tempHolder; break;
                case '#containment_EffectiveControlAControlMethodDescription':
                    containmentArray.containment.EffectiveControlAControlMethodDescription = tempHolder; break;
                case '#containment_EffectiveControlB_documentation':
                    containmentArray.containment.EffectiveControlBDocumentation = tempHolder; break;
                case '#containment_NontargetImpacts_documentation':
                    containmentArray.containment.NontargetImpactsDocumentation = tempHolder; break;

            }
            Containment_Substep_Form_Check(containmentArray);
        });
    };
    // 8 -  Function - Add_Event_To_Nav(destinationArray)            \\
    function Add_Event_To_Nav(destinationArray){
        // Forward and Back
        $('#content_nav_forward').click(function(){
            if(destinationArray.forward !== "none"){
                if($('#content_nav_forward').hasClass('content_nav_base_active')){
                    Containment_Substep_Save();
                    if(destinationArray.forward === '5.1'){
                        Popup('containment', 'suppression', '', destinationArray.current, cookieData, completedSteps, currentStep);
                    }
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.forward);
                }
            }else{
                Popup(null, null, '');
            }
        });
        $('#content_nav_back').click(function(){
            if(destinationArray.back !== "none"){
                if($('#content_nav_back').hasClass('content_nav_base_active')){
                    Containment_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.back);
                }
            }
        });
        // Substeps
        $('#content_step_strategy_exploration_containment_substep_one').click(function(){
            if(destinationArray.substep_one !== "none"){
                if($('#content_step_strategy_exploration_containment_substep_one').hasClass('content_substep_available')){
                    Containment_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_one);
                }
            }
        });
        $('#content_step_strategy_exploration_containment_substep_two').click(function(){
            if(destinationArray.substep_two !== "none"){
                if($('#content_step_strategy_exploration_containment_substep_two').hasClass('content_substep_available')){
                    Containment_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_two);
                }
            }
        });
        $('#content_step_strategy_exploration_containment_substep_three').click(function(){
            if(destinationArray.substep_three !== "none"){
                if($('#content_step_strategy_exploration_containment_substep_three').hasClass('content_substep_available')){
                    Containment_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_three);
                }
            }
        });
        $('#content_step_strategy_exploration_containment_substep_four').click(function(){
            if(destinationArray.substep_four !== "none"){
                if($('#content_step_strategy_exploration_containment_substep_four').hasClass('content_substep_available')){
                    Containment_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_four);
                }
            }
        });
        $('#content_step_strategy_exploration_containment_substep_five').click(function(){
            if(destinationArray.substep_five !== "none"){
                if($('#content_step_strategy_exploration_containment_substep_five').hasClass('content_substep_available')){
                    Containment_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_five);
                }
            }
        });
        $('#content_step_strategy_exploration_containment_substep_six').click(function(){
            if(destinationArray.substep_six !== "none"){
                if($('#content_step_strategy_exploration_containment_substep_six').hasClass('content_substep_available')){
                    Containment_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_six);
                }
            }
        });
        $('#content_step_strategy_exploration_containment_substep_seven').click(function(){
            if(destinationArray.substep_seven !== "none"){
                if($('#content_step_strategy_exploration_containment_substep_seven').hasClass('content_substep_available')){
                    Containment_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_seven);
                }
            }
        });
        $('#content_step_strategy_exploration_containment_substep_eight').click(function(){
            if(destinationArray.substep_eight !== "none"){
                if($('#content_step_strategy_exploration_containment_substep_eight').hasClass('content_substep_available')){
                    Containment_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_eight);
                }
            }
        });
        // Content Steps
        $('#content_progress_bar_project_background').click(function(){
            if(destinationArray.projectBackground !== "none"){
                if($('#content_progress_bar_project_background').hasClass('progress_bar_available')){
                    Containment_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.projectBackground);
                }
            }
        });
        $('#content_progress_bar_strategy_selection').click(function(){
            if(destinationArray.strategySelection !== "none"){
                if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_available')){
                    Containment_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.strategySelection);
                }
            }
        });
        $('#content_progress_bar_strategy_exploration').click(function(){
            if(destinationArray.strategyExploration !== "none"){
                if($('#content_progress_bar_strategy_exploration').hasClass('progress_bar_available')){
                    Containment_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.strategyExploration);
                }
            }
        });
    };
    // 9 -  Populate/Execute - Add_Event_To_Field, Add_Event_To_Nav  \\
    Containment_Substep_Form_Check(containmentArray);
    switch(currentStep){
        case "4.1":
            Add_Event_To_Field('#containment_SocialPoliticalA_documentation');
            $('#containment_SocialPoliticalA_yes').change(function(){ Containment_Check_Boxes('#containment_SocialPoliticalA_yes'); });
            $('#containment_SocialPoliticalA_no').change(function(){ Containment_Check_Boxes('#containment_SocialPoliticalA_no'); });
            $('#containment_SocialPoliticalA_uncertain').change(function(){ Containment_Check_Boxes('#containment_SocialPoliticalA_uncertain'); });
            // Determine where back will point
            var tempBack;
            switch(cookieData.strategySelection.AbundanceAndDistributionConfirm){
                case '#strategy_confirmation_yes':
                    tempBack = '2.3'; break;
                case '#strategy_confirmation_no':
                    tempBack = '2.4'; break;
            }
            destinationArray.back = tempBack;
            destinationArray.current = '4.1';
            destinationArray.substep_one = 'none';
            break;
        case "4.2":
            Add_Event_To_Field('#containment_SocialPoliticalB_documentation');
            $('#containment_SocialPoliticalB_yes').change(function(){ Containment_Check_Boxes('#containment_SocialPoliticalB_yes'); });
            $('#containment_SocialPoliticalB_no').change(function(){ Containment_Check_Boxes('#containment_SocialPoliticalB_no'); });
            $('#containment_SocialPoliticalB_uncertain').change(function(){ Containment_Check_Boxes('#containment_SocialPoliticalB_uncertain'); });
            destinationArray.back = '4.1';
            destinationArray.current = '4.2';
            destinationArray.substep_two = 'none';
            break;
        case "4.3":
            Add_Event_To_Field('#containment_PreventingReproductionA_documentation');
            $('#containment_PreventingReproductionA_yes').change(function(){ Containment_Check_Boxes('#containment_PreventingReproductionA_yes'); });
            $('#containment_PreventingReproductionA_no').change(function(){ Containment_Check_Boxes('#containment_PreventingReproductionA_no'); });
            $('#containment_PreventingReproductionA_uncertain').change(function(){ Containment_Check_Boxes('#containment_PreventingReproductionA_uncertain'); });
            destinationArray.back = '4.2';
            destinationArray.current = '4.3';
            destinationArray.substep_three = 'none';
            break;
        case "4.4":
            Add_Event_To_Field('#containment_PreventingReproductionB_documentation');
            $('#containment_PreventingReproductionB_yes').change(function(){ Containment_Check_Boxes('#containment_PreventingReproductionB_yes'); });
            $('#containment_PreventingReproductionB_no').change(function(){ Containment_Check_Boxes('#containment_PreventingReproductionB_no'); });
            $('#containment_PreventingReproductionB_uncertain').change(function(){ Containment_Check_Boxes('#containment_PreventingReproductionB_uncertain'); });
            destinationArray.back = '4.3';
            destinationArray.current = '4.4';
            destinationArray.substep_four = 'none';
            break;
        case "4.5":
            Add_Event_To_Field('#containment_DetectingSmall_documentation');
            $('#containment_DetectingSmall_yes').change(function(){ Containment_Check_Boxes('#containment_DetectingSmall_yes'); });
            $('#containment_DetectingSmall_no').change(function(){ Containment_Check_Boxes('#containment_DetectingSmall_no'); });
            $('#containment_DetectingSmall_uncertain').change(function(){ Containment_Check_Boxes('#containment_DetectingSmall_uncertain'); });
            destinationArray.back = '4.4';
            destinationArray.current = '4.5';
            destinationArray.substep_five = 'none';
            break;
        case "4.6":
            Add_Event_To_Field('#containment_EffectiveControlA_documentation');
            Add_Event_To_Field('#containment_EffectiveControlAControlMethodDescription');
            $('#containment_EffectiveControlA_yes').change(function(){ Containment_Check_Boxes('#containment_EffectiveControlA_yes'); });
            $('#containment_EffectiveControlA_no').change(function(){ Containment_Check_Boxes('#containment_EffectiveControlA_no'); });
            $('#containment_EffectiveControlA_uncertain').change(function(){ Containment_Check_Boxes('#containment_EffectiveControlA_uncertain'); });
            $('#containment_EffectiveControlAControlMethod_manual').change(function(){ Containment_Check_Boxes('#containment_EffectiveControlAControlMethod_manual'); });
            $('#containment_EffectiveControlAControlMethod_mechanical').change(function(){ Containment_Check_Boxes('#containment_EffectiveControlAControlMethod_mechanical'); });
            $('#containment_EffectiveControlAControlMethod_herbicide').change(function(){ Containment_Check_Boxes('#containment_EffectiveControlAControlMethod_herbicide'); });
            $('#containment_EffectiveControlAControlMethod_biological').change(function(){ Containment_Check_Boxes('#containment_EffectiveControlAControlMethod_biological'); });
            $('#containment_EffectiveControlAControlMethod_other').change(function(){ Containment_Check_Boxes('#containment_EffectiveControlAControlMethod_other'); });
            destinationArray.back = '4.5';
            destinationArray.current = '4.6';
            destinationArray.substep_six = 'none';
            break;
        case "4.7":
            Add_Event_To_Field('#containment_EffectiveControlB_documentation');
            $('#containment_EffectiveControlB_yes').change(function(){ Containment_Check_Boxes('#containment_EffectiveControlB_yes'); });
            $('#containment_EffectiveControlB_no').change(function(){ Containment_Check_Boxes('#containment_EffectiveControlB_no'); });
            $('#containment_EffectiveControlB_uncertain').change(function(){ Containment_Check_Boxes('#containment_EffectiveControlB_uncertain'); });
            destinationArray.back = '4.6';
            destinationArray.current = '4.7';
            destinationArray.substep_seven = 'none';
            break;
        case "4.8":
            Add_Event_To_Field('#containment_NontargetImpacts_documentation');
            $('#containment_NontargetImpacts_yes').change(function(){ Containment_Check_Boxes('#containment_NontargetImpacts_yes'); });
            $('#containment_NontargetImpacts_no').change(function(){ Containment_Check_Boxes('#containment_NontargetImpacts_no'); });
            $('#containment_NontargetImpacts_uncertain').change(function(){ Containment_Check_Boxes('#containment_NontargetImpacts_uncertain'); });
            destinationArray.back = '4.7';
            destinationArray.current = '4.8';
            destinationArray.substep_ = 'none';
            break;
    }
    Add_Event_To_Nav(destinationArray);
};
/***********************************************\
 * Step(3) - Suppression                       *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s)*
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Strategy_Exploration_Suppression(cookieData, completedSteps, currentStep){
    // ------------------------------------------------------------- \\
    // FUNCTION LAYOUT                                               \\
    // ------------------------------------------------------------- \\
    // 1 -  Declare variables                                        \\
    // 2 -  Declare subcategory values (If applicable)               \\
    // 3 -  Ensure correct step container is displayed,              \\
    //      Check if loading data (Check -> Load -> Populate Fields) \\
    // 4 -  Function - Suppression_Substep_Form_Check(formArray)     \\
    // 5 -  Function - Suppression_Substep_Save()                    \\
    // 6 -  Function - Suppression_Check_Boxes(boxName)              \\
    // 7 -  Function - Add_Event_To_Field(fieldLocation, substep)    \\
    // 8 -  Function - Add_Event_To_Nav(destinationArray)            \\
    // 9 -  Populate/Execute - Add_Event_To_Field, Add_Event_To_Nav  \\
    // ------------------------------------------------------------- \\
    // 1 -  Declare variables                                        \\
    var suppressionArray = {
            suppression: {
                SocialPoliticalA: null,
                SocialPoliticalADocumentation: null,
                SocialPoliticalB: null,
                SocialPoliticalBDocumentation: null,
                EffectiveControlA: null,
                EffectiveControlADocumentation: null,
                EffectiveControlAControlMethod: null,
                EffectiveControlAControlMethodDocumentation: null,
                EffectiveControlB: null,
                EffectiveControlBDocumentation: null,
                NontargetImpacts: null,
                NontargetImpactsDocumentation: null
            }
        },
        saveArray = {},
        destinationArray = {
            substep_one: '5.1',
            substep_two: '5.2',
            substep_three: '5.3',
            substep_four: '5.4',
            substep_five: '5.5',
            projectBackground: '1.1',
            strategySelection: '2.1',
            strategyExploration: 'none'
        };
    // 2 -  Declare subcategory values (If applicable)               \\
    // 3 -  Ensure correct step container is displayed,              \\
    //      Check if loading data (Check -> Load -> Populate Fields) \\
    if($('#content_nav_back').hasClass('content_nav_base_inactive')){
        $('#content_nav_back').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
    }
    switch(currentStep){
        case "5.1":
            // Display the step
            $('#content_step_strategy_exploration_suppression_SocialPoliticalA').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.suppression.SocialPoliticalA !== null){ suppressionArray.suppression.SocialPoliticalA = cookieData.suppression.SocialPoliticalA; }
            if(cookieData.suppression.SocialPoliticalADocumentation !== null){ suppressionArray.suppression.SocialPoliticalADocumentation = cookieData.suppression.SocialPoliticalADocumentation; }
            // Populate Fields
            switch(suppressionArray.suppression.SocialPoliticalA){
                case "#suppression_SocialPoliticalA_yes":
                    $('#suppression_SocialPoliticalA_yes').prop('checked', true);
                    destinationArray.forward = '5.2';
                    break;
                case "#suppression_SocialPoliticalA_no":
                    $('#suppression_SocialPoliticalA_no').prop('checked', true);
                    destinationArray.forward = 'stop';
                    break;
                case "#suppression_SocialPoliticalA_uncertain":
                    $('#suppression_SocialPoliticalA_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#suppression_SocialPoliticalA_documentation').prop('value', suppressionArray.suppression.SocialPoliticalADocumentation);
            break;
        case "5.2":
            // Display the step
            $('#content_step_strategy_exploration_suppression_SocialPoliticalB').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.suppression.SocialPoliticalB !== null){ suppressionArray.suppression.SocialPoliticalB = cookieData.suppression.SocialPoliticalB; }
            if(cookieData.suppression.SocialPoliticalBDocumentation !== null){ suppressionArray.suppression.SocialPoliticalBDocumentation = cookieData.suppression.SocialPoliticalBDocumentation; }
            // Populate Fields
            switch(suppressionArray.suppression.SocialPoliticalB){
                case "#suppression_SocialPoliticalB_yes":
                    $('#suppression_SocialPoliticalB_yes').prop('checked', true);
                    destinationArray.forward = '5.3';
                    break;
                case "#suppression_SocialPoliticalB_no":
                    $('#suppression_SocialPoliticalB_no').prop('checked', true);
                    destinationArray.forward = 'stop';
                    break;
                case "#suppression_SocialPoliticalB_uncertain":
                    $('#suppression_SocialPoliticalB_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#suppression_SocialPoliticalB_documentation').prop('value', suppressionArray.suppression.SocialPoliticalBDocumentation);
            break;
        case "5.3":
            // Display the step
            $('#content_step_strategy_exploration_suppression_EffectiveControlA').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.suppression.EffectiveControlA !== null){ suppressionArray.suppression.EffectiveControlA = cookieData.suppression.EffectiveControlA; }
            if(cookieData.suppression.EffectiveControlADocumentation !== null){ suppressionArray.suppression.EffectiveControlADocumentation = cookieData.suppression.EffectiveControlADocumentation; }
            if(cookieData.suppression.EffectiveControlAControlMethod !== null){ suppressionArray.suppression.EffectiveControlAControlMethod = cookieData.suppression.EffectiveControlAControlMethod; }
            if(cookieData.suppression.EffectiveControlAControlMethodDescription !== null){ suppressionArray.suppression.EffectiveControlAControlMethodDescription = cookieData.suppression.EffectiveControlAControlMethodDescription; }
            // Populate Fields
            switch(suppressionArray.suppression.EffectiveControlA){
                case "#suppression_EffectiveControlA_yes":
                    $('#suppression_EffectiveControlA_yes').prop('checked', true);
                    destinationArray.forward = '5.4';
                    break;
                case "#suppression_EffectiveControlA_no":
                    $('#suppression_EffectiveControlA_no').prop('checked', true);
                    destinationArray.forward = 'stop';
                    break;
                case "#suppression_EffectiveControlA_uncertain":
                    $('#suppression_EffectiveControlA_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#suppression_EffectiveControlA_documentation').prop('value', suppressionArray.suppression.EffectiveControlADocumentation);
            switch(suppressionArray.suppression.EffectiveControlAControlMethod){
                case "#suppression_EffectiveControlAControlMethod_manual":
                    $('#suppression_EffectiveControlAControlMethod_manual').prop('checked', true);
                    break;
                case "#suppression_EffectiveControlAControlMethod_mechanical":
                    $('#suppression_EffectiveControlAControlMethod_mechanical').prop('checked', true);
                    break;
                case "#suppression_EffectiveControlAControlMethod_herbicide":
                    $('#suppression_EffectiveControlAControlMethod_herbicide').prop('checked', true);
                    break;
                case "#suppression_EffectiveControlAControlMethod_biological":
                    $('#suppression_EffectiveControlAControlMethod_biological').prop('checked', true);
                    break;
                case "#suppression_EffectiveControlAControlMethod_other":
                    $('#suppression_EffectiveControlAControlMethod_other').prop('checked', true);
                    break;
            }
            $('#suppression_EffectiveControlAControlMethodDescription').prop('value', suppressionArray.suppression.EffectiveControlAControlMethodDescription);
            break;
        case "5.4":
            // Display the step
            $('#content_step_strategy_exploration_suppression_EffectiveControlB').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.suppression.EffectiveControlB !== null){ suppressionArray.suppression.EffectiveControlB = cookieData.suppression.EffectiveControlB; }
            if(cookieData.suppression.EffectiveControlBDocumentation !== null){ suppressionArray.suppression.EffectiveControlBDocumentation = cookieData.suppression.EffectiveControlBDocumentation; }
            // Populate Fields
            switch(suppressionArray.suppression.EffectiveControlB){
                case "#suppression_EffectiveControlB_yes":
                    $('#suppression_EffectiveControlB_yes').prop('checked', true);
                    destinationArray.forward = '5.5';
                    break;
                case "#suppression_EffectiveControlB_no":
                    $('#suppression_EffectiveControlB_no').prop('checked', true);
                    destinationArray.forward = 'stop';
                    break;
                case "#suppression_EffectiveControlB_uncertain":
                    $('#suppression_EffectiveControlB_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#suppression_EffectiveControlB_documentation').prop('value', suppressionArray.suppression.EffectiveControlBDocumentation);
            break;
        case "5.5":
            // Display the step
            $('#content_step_strategy_exploration_suppression_NontargetImpacts').removeClass('content_step_inactive').addClass('content_step_active');
            // Checking if data is present
            if(cookieData.suppression.NontargetImpacts !== null){ suppressionArray.suppression.NontargetImpacts = cookieData.suppression.NontargetImpacts; }
            if(cookieData.suppression.NontargetImpactsDocumentation !== null){ suppressionArray.suppression.NontargetImpactsDocumentation = cookieData.suppression.NontargetImpactsDocumentation; }
            // Populate Fields
            switch(suppressionArray.suppression.NontargetImpacts){
                case "#suppression_NontargetImpacts_yes":
                    $('#suppression_NontargetImpacts_yes').prop('checked', true);
                    // TODO: TBD Destination
                    destinationArray.forward = 'none';
                    break;
                case "#suppression_NontargetImpacts_no":
                    $('#suppression_NontargetImpacts_no').prop('checked', true);
                    destinationArray.forward = 'stop';
                    break;
                case "#suppression_NontargetImpacts_uncertain":
                    $('#suppression_NontargetImpacts_uncertain').prop('checked', true);
                    destinationArray.forward = 'pause';
                    break;
            }
            $('#suppression_NontargetImpacts_documentation').prop('value', suppressionArray.suppression.NontargetImpactsDocumentation);
            break;
    }
    // 4 -  Function - Suppression_Substep_Form_Check(formArray)     \\
    function Suppression_Substep_Form_Check(formArray){
        var tempValue,
            nextStep;
        // Setup Values
        switch(currentStep){
            case "5.1":
                tempValue = formArray.suppression.SocialPoliticalA;
                nextStep = '#content_step_strategy_exploration_suppression_substep_two';
                break;
            case "5.2":
                tempValue = formArray.suppression.SocialPoliticalB;
                nextStep = '#content_step_strategy_exploration_suppression_substep_three';
                break;
            case "5.3":
                tempValue = formArray.suppression.EffectiveControlA;
                nextStep = '#content_step_strategy_exploration_suppression_substep_four';
                break;
            case "5.4":
                tempValue = formArray.suppression.EffectiveControlB;
                nextStep = '#content_step_strategy_exploration_suppression_substep_five';
                break;
            case "5.5":
                tempValue = formArray.suppression.NontargetImpacts;
                nextStep = '';
                // TODO: TBD Destination
                break;
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
    // 5 -  Function - Suppression_Substep_Save()                    \\
    function Suppression_Substep_Save(){
        var saveArray,
            requiredField,
            tempPush = currentStep;
        // Setup Values
        switch(currentStep){
            case "5.1":
                saveArray = {
                    suppression: {
                        SocialPoliticalA: suppressionArray.suppression.SocialPoliticalA,
                        SocialPoliticalADocumentation: suppressionArray.suppression.SocialPoliticalADocumentation
                    }
                };
                requiredField = suppressionArray.suppression.SocialPoliticalA;
                break;
            case "5.2":
                saveArray = {
                    suppression: {
                        SocialPoliticalB: suppressionArray.suppression.SocialPoliticalB,
                        SocialPoliticalBDocumentation: suppressionArray.suppression.SocialPoliticalBDocumentation
                    }
                };
                requiredField = suppressionArray.suppression.SocialPoliticalB;
                break;
            case "5.3":
                saveArray = {
                    suppression: {
                        EffectiveControlA: suppressionArray.suppression.EffectiveControlA,
                        EffectiveControlADocumentation: suppressionArray.suppression.EffectiveControlADocumentation,
                        EffectiveControlAControlMethod: suppressionArray.suppression.EffectiveControlAControlMethod,
                        EffectiveControlAControlMethodDescription: suppressionArray.suppression.EffectiveControlAControlMethodDescription
                    }
                };
                requiredField = suppressionArray.suppression.EffectiveControlA;
                break;
            case "5.4":
                saveArray = {
                    suppression: {
                        EffectiveControlB: suppressionArray.suppression.EffectiveControlB,
                        EffectiveControlBDocumentation: suppressionArray.suppression.EffectiveControlBDocumentation
                    }
                };
                requiredField = suppressionArray.suppression.EffectiveControlB;
                break;
            case "5.5":
                saveArray = {
                    suppression: {
                        NontargetImpacts: suppressionArray.suppression.NontargetImpacts,
                        NontargetImpactsDocumentation: suppressionArray.suppression.NontargetImpactsDocumentation
                    }
                };
                requiredField = suppressionArray.suppression.NontagetImpacts;
                break;
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
    // 6 -  Function - Suppression_Check_Boxes(boxName)              \\
    function Suppression_Check_Boxes(boxName){
        // This is an onClick type function. We need to be certain that no other
        //      boxes in the same category are checked when we save the value.
        switch(currentStep){
            case "5.1":
                $('#suppression_SocialPoliticalA_yes').prop('checked', false);
                $('#suppression_SocialPoliticalA_no').prop('checked', false);
                $('#suppression_SocialPoliticalA_uncertain').prop('checked', false);
                break;
            case "5.2":
                $('#suppression_SocialPoliticalB_yes').prop('checked', false);
                $('#suppression_SocialPoliticalB_no').prop('checked', false);
                $('#suppression_SocialPoliticalB_uncertain').prop('checked', false);
                break;
            case "5.3":
                if((boxName === '#suppression_EffectiveControlA_yes')||(boxName === '#suppression_EffectiveControlA_no')||(boxName === '#suppression_EffectiveControlA_uncertain')){
                    $('#suppression_EffectiveControlA_yes').prop('checked', false);
                    $('#suppression_EffectiveControlA_no').prop('checked', false);
                    $('#suppression_EffectiveControlA_uncertain').prop('checked', false);
                }else{
                    $('#suppression_EffectiveControlAControlMethod_manual').prop('checked', false);
                    $('#suppression_EffectiveControlAControlMethod_mechanical').prop('checked', false);
                    $('#suppression_EffectiveControlAControlMethod_herbicide').prop('checked', false);
                    $('#suppression_EffectiveControlAControlMethod_biological').prop('checked', false);
                    $('#suppression_EffectiveControlAControlMethod_other').prop('checked', false);
                }
                break;
            case "5.4":
                $('#suppression_EffectiveControlB_yes').prop('checked', false);
                $('#suppression_EffectiveControlB_no').prop('checked', false);
                $('#suppression_EffectiveControlB_uncertain').prop('checked', false);
                break;
            case "5.5":
                $('#suppression_NontargetImpacts_yes').prop('checked', false);
                $('#suppression_NontargetImpacts_no').prop('checked', false);
                $('#suppression_NontargetImpacts_uncertain').prop('checked', false);
                break;
        }
        // Check the boxName
        $(boxName).prop('checked', true);
        // Assign the value
        switch(boxName){
            // *** 5.1
            case '#suppression_SocialPoliticalA_yes':
                suppressionArray.suppression.SocialPoliticalA = '#suppression_SocialPoliticalA_yes';
                destinationArray.forward = '5.2'; break;
            case '#suppression_SocialPoliticalA_no':
                suppressionArray.suppression.SocialPoliticalA = '#suppression_SocialPoliticalA_no';
                destinationArray.forward = 'none'; break;
            case '#suppression_SocialPoliticalA_uncertain':
                suppressionArray.suppression.SocialPoliticalA = '#suppression_SocialPoliticalA_uncertain';
                destinationArray.forward = 'none'; break;
            // *** 5.2
            case '#suppression_SocialPoliticalB_yes':
                suppressionArray.suppression.SocialPoliticalB = '#suppression_SocialPoliticalB_yes';
                destinationArray.forward = '5.3'; break;
            case '#suppression_SocialPoliticalB_no':
                suppressionArray.suppression.SocialPoliticalB = '#suppression_SocialPoliticalB_no';
                destinationArray.forward = 'none'; break;
            case '#suppression_SocialPoliticalB_uncertain':
                suppressionArray.suppression.SocialPoliticalB = '#suppression_SocialPoliticalB_uncertain';
                destinationArray.forward = 'none'; break;
            // *** 5.3
            case '#suppression_EffectiveControlA_yes':
                suppressionArray.suppression.EffectiveControlA = '#suppression_EffectiveControlA_yes';
                destinationArray.forward = '5.4'; break;
            case '#suppression_EffectiveControlA_no':
                suppressionArray.suppression.EffectiveControlA = '#suppression_EffectiveControlA_no';
                destinationArray.forward = 'none'; break;
            case '#suppression_EffectiveControlA_uncertain':
                suppressionArray.suppression.EffectiveControlA = '#suppression_EffectiveControlA_uncertain';
                destinationArray.forward = 'none'; break;
            case '#suppression_EffectiveControlAControlMethod_manual':
                suppressionArray.suppression.EffectiveControlAControlMethod = '#suppression_EffectiveControlAControlMethod_manual'; break;
            case '#suppression_EffectiveControlAControlMethod_mechanical':
                suppressionArray.suppression.EffectiveControlAControlMethod = '#suppression_EffectiveControlAControlMethod_mechanical'; break;
            case '#suppression_EffectiveControlAControlMethod_herbicide':
                suppressionArray.suppression.EffectiveControlAControlMethod = '#suppression_EffectiveControlAControlMethod_herbicide'; break;
            case '#suppression_EffectiveControlAControlMethod_biological':
                suppressionArray.suppression.EffectiveControlAControlMethod = '#suppression_EffectiveControlAControlMethod_biological'; break;
            case '#suppression_EffectiveControlAControlMethod_other':
                suppressionArray.suppression.EffectiveControlAControlMethod = '#suppression_EffectiveControlAControlMethod_other'; break;
            // *** 5.4
            case '#suppression_EffectiveControlB_yes':
                suppressionArray.suppression.EffectiveControlB = '#suppression_EffectiveControlB_yes';
                destinationArray.forward = '5.5'; break;
            case '#suppression_EffectiveControlB_no':
                suppressionArray.suppression.EffectiveControlB = '#suppression_EffectiveControlB_no';
                destinationArray.forward = 'none'; break;
            case '#suppression_EffectiveControlB_uncertain':
                suppressionArray.suppression.EffectiveControlB = '#suppression_EffectiveControlB_uncertain';
                destinationArray.forward = 'none'; break;
            // *** 5.5
            case '#suppression_NontargetImpacts_yes':
                suppressionArray.suppression.NontargetImpacts = '#suppression_NontargetImpacts_yes';
                destinationArray.forward = 'none'; break;
            case '#suppression_NontargetImpacts_no':
                suppressionArray.suppression.NontargetImpacts = '#suppression_NontargetImpacts_no';
                destinationArray.forward = 'none'; break;
            case '#suppression_NontargetImpacts_uncertain':
                suppressionArray.suppression.NontargetImpacts = '#suppression_NontargetImpacts_uncertain';
                destinationArray.forward = 'none'; break;
        }
        Suppression_Substep_Form_Check(suppressionArray);
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
            // Manually fire locations to specifically assign array variable.
            switch(fieldLocation){
                case '#suppression_SocialPoliticalA_documentation':
                    suppressionArray.suppression.SocialPoliticalADocumentation = tempHolder; break;
                case '#suppression_SocialPoliticalB_documentation':
                    suppressionArray.suppression.SocialPoliticalBDocumentation = tempHolder; break;
                case '#suppression_EffectiveControlA_documentation':
                    suppressionArray.suppression.EffectiveControlADocumentation = tempHolder; break;
                case '#suppression_EffectiveControlAControlMethodDescription':
                    suppressionArray.suppression.EffectiveControlAControlMethodDescription = tempHolder; break;
                case '#suppression_EffectiveControlB_documentation':
                    suppressionArray.suppression.EffectiveControlBDocumentation = tempHolder; break;
                case '#suppression_NontargetImpacts_documentation':
                    suppressionArray.suppression.NontargetImpactsDocumentation = tempHolder; break;
            }
            Suppression_Substep_Form_Check(suppressionArray);
        });
    };
    // 8 -  Function - Add_Event_To_Nav(destinationArray)            \\
    function Add_Event_To_Nav(destinationArray){
        $('#content_nav_forward').click(function(){
            if(destinationArray.forward !== "none"){
                if($('#content_nav_forward').hasClass('content_nav_base_active')){
                    Suppression_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.forward);
                }
            }else{
                Popup(null, null, '');
            }
        });
        $('#content_nav_back').click(function(){
            if(destinationArray.back !== "none"){
                if($('#content_nav_back').hasClass('content_nav_base_active')){
                    Suppression_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.back);
                }
            }
        });
        $('#content_step_strategy_exploration_suppression_substep_one').click(function(){
            if(destinationArray.substep_one !== "none"){
                if($('#content_step_strategy_exploration_suppression_substep_one').hasClass('content_substep_available')){
                    Suppression_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_one);
                }
            }
        });
        $('#content_step_strategy_exploration_suppression_substep_two').click(function(){
            if(destinationArray.substep_two !== "none"){
                if($('#content_step_strategy_exploration_suppression_substep_two').hasClass('content_substep_available')){
                    Suppression_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_two);
                }
            }
        });
        $('#content_step_strategy_exploration_suppression_substep_three').click(function(){
            if(destinationArray.substep_three !== "none"){
                if($('#content_step_strategy_exploration_suppression_substep_three').hasClass('content_substep_available')){
                    Suppression_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_three);
                }
            }
        });
        $('#content_step_strategy_exploration_suppression_substep_four').click(function(){
            if(destinationArray.substep_four !== "none"){
                if($('#content_step_strategy_exploration_suppression_substep_four').hasClass('content_substep_available')){
                    Suppression_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_four);
                }
            }
        });
        $('#content_step_strategy_exploration_suppression_substep_five').click(function(){
            if(destinationArray.substep_five !== "none"){
                if($('#content_step_strategy_exploration_suppression_substep_five').hasClass('content_substep_available')){
                    Suppression_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.substep_five);
                }
            }
        });
        $('#content_progress_bar_project_background').click(function(){
            if(destinationArray.projectBackground !== "none"){
                if($('#content_progress_bar_project_background').hasClass('progress_bar_available')){
                    Suppression_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.projectBackground);
                }
            }
        });
        $('#content_progress_bar_strategy_selection').click(function(){
            if(destinationArray.strategySelection !== "none"){
                if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_available')){
                    Suppression_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.strategySelection);
                }
            }
        });
        $('#content_progress_bar_strategy_exploration').click(function(){
            if(destinationArray.strategyExploration !== "none"){
                if($('#content_progress_bar_strategy_exploration').hasClass('progress_bar_available')){
                    Suppression_Substep_Save();
                    Check_Available_Steps(cookieData, completedSteps, destinationArray.strategyExploration);
                }
            }
        });
    };
    // 9 -  Populate/Execute - Add_Event_To_Field, Add_Event_To_Nav  \\
    Suppression_Substep_Form_Check(suppressionArray);
    switch(currentStep){
        case "5.1":
            Add_Event_To_Field('#suppression_SocialPoliticalA_documentation');
            $('#suppression_SocialPoliticalA_yes').change(function(){ Suppression_Check_Boxes('#suppression_SocialPoliticalA_yes'); });
            $('#suppression_SocialPoliticalA_no').change(function(){ Suppression_Check_Boxes('#suppression_SocialPoliticalA_no'); });
            $('#suppression_SocialPoliticalA_uncertain').change(function(){ Suppression_Check_Boxes('#suppression_SocialPoliticalA_uncertain'); });
            // Determine where back will point to
            var tempBack;
            switch(cookieData.strategySelection.AbundanceAndDistributionConfirm){
                case '#strategy_confirmation_yes':
                    tempBack = '2.3'; break;
                case '#strategy_confirmation_no':
                    tempBack = '2.4'; break;
            }
            destinationArray.back = tempBack;
            destinationArray.current = '5.1';
            destinationArray.substep_one = 'none';
            break;
        case "5.2":
            Add_Event_To_Field('#suppression_SocialPoliticalB_documentation');
            $('#suppression_SocialPoliticalB_yes').change(function(){ Suppression_Check_Boxes('#suppression_SocialPoliticalB_yes'); });
            $('#suppression_SocialPoliticalB_no').change(function(){ Suppression_Check_Boxes('#suppression_SocialPoliticalB_no'); });
            $('#suppression_SocialPoliticalB_uncertain').change(function(){ Suppression_Check_Boxes('#suppression_SocialPoliticalB_uncertain'); });
            destinationArray.back = '5.1';
            destinationArray.current = '5.2';
            destinationArray.substep_two = 'none';
            break;
        case "5.3":
            Add_Event_To_Field('#suppression_EffectiveControlA_documentation');
            Add_Event_To_Field('#suppression_EffectiveControlAControlMethodDescription');
            $('#suppression_EffectiveControlA_yes').change(function(){ Suppression_Check_Boxes('#suppression_EffectiveControlA_yes'); });
            $('#suppression_EffectiveControlA_no').change(function(){ Suppression_Check_Boxes('#suppression_EffectiveControlA_no'); });
            $('#suppression_EffectiveControlA_uncertain').change(function(){ Suppression_Check_Boxes('#suppression_EffectiveControlA_uncertain'); });
            $('#suppression_EffectiveControlAControlMethod_manual').change(function(){ Suppression_Check_Boxes('#suppression_EffectiveControlAControlMethod_manual'); });
            $('#suppression_EffectiveControlAControlMethod_mechanical').change(function(){ Suppression_Check_Boxes('#suppression_EffectiveControlAControlMethod_mechanical'); });
            $('#suppression_EffectiveControlAControlMethod_herbicide').change(function(){ Suppression_Check_Boxes('#suppression_EffectiveControlAControlMethod_herbicide'); });
            $('#suppression_EffectiveControlAControlMethod_biological').change(function(){ Suppression_Check_Boxes('#suppression_EffectiveControlAControlMethod_biological'); });
            $('#suppression_EffectiveControlAControlMethod_other').change(function(){ Suppression_Check_Boxes('#suppression_EffectiveControlAControlMethod_other'); });
            destinationArray.back = '5.2';
            destinationArray.current = '5.3';
            destinationArray.substep_three = 'none';
            break;
        case "5.4":
            Add_Event_To_Field('#suppression_EffectiveControlB_documentation');
            $('#suppression_EffectiveControlB_yes').change(function(){ Suppression_Check_Boxes('#suppression_EffectiveControlB_yes'); });
            $('#suppression_EffectiveControlB_no').change(function(){ Suppression_Check_Boxes('#suppression_EffectiveControlB_no'); });
            $('#suppression_EffectiveControlB_uncertain').change(function(){ Suppression_Check_Boxes('#suppression_EffectiveControlB_uncertain'); });
            destinationArray.back = '5.3';
            destinationArray.current = '5.4';
            destinationArray.substep_four = 'none';
            break;
        case "5.5":
            Add_Event_To_Field('#suppression_NontargetImpacts_documentation');
            $('#suppression_NontargetImpacts_yes').change(function(){ Suppression_Check_Boxes('#suppression_NontargetImpacts_yes'); });
            $('#suppression_NontargetImpacts_no').change(function(){ Suppression_Check_Boxes('#suppression_NontargetImpacts_no'); });
            $('#suppression_NontargetImpacts_uncertain').change(function(){ Suppression_Check_Boxes('#suppression_NontargetImpacts_uncertain'); });
            destinationArray.back = '5.4';
            destinationArray.current = '5.5';
            destinationArray.substep_five = 'none';
            break;
    }
    Add_Event_To_Nav(destinationArray);
};
