/******************************************************************************\
 * IPMDAT_records.js                                                          *
 * -------------------------------------------------------------------------- *
 * This file contains the record management for the IPMDAT project.           *
\******************************************************************************/
function Determine_Records(){
    /***********************************************\
     * Determine_Records()                         *
     * ------------------------------------------- *
     * 1 - Declare Variables                       *
     * 2 - Determine if records are created and    *
     *      assign functionality.                  *
     * 3 - Populate stats                          *
     * 4 - Create_Record(recordNumber)             *
     * 5 - Delete_Record(recordNumber)             *
     * 6 - Load_Record(recordNumber)               *
     * 7 - Unbind_Keys(recordNumber)               *
    \***********************************************/
    //* 1 - Declare Variables                       *
    var recordOneName = 'IPMDAT_cookie_one',
        recordOne = $.JSONCookie(recordOneName),
        recordOneBlank = jQuery.isEmptyObject(recordOne),
        recordTwoName = 'IPMDAT_cookie_two',
        recordTwo = $.JSONCookie(recordTwoName),
        recordTwoBlank = jQuery.isEmptyObject(recordTwo),
        recordThreeName = 'IPMDAT_cookie_three',
        recordThree = $.JSONCookie(recordThreeName),
        recordThreeBlank = jQuery.isEmptyObject(recordThree),
        cookieTemplate = {
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

    //* 2 - Determine if records are created and    *
    //*      assign functionality.                  *
    if(recordOneBlank === true){
        $('#record_one_create').fadeIn(100)
            .delay(150)
            .removeClass('content_substep_container_inactive')
            .addClass('content_substep_container_active')
            .click(function(){ Create_Record(recordOneName); });
    }else{
        $('#record_one_load').fadeIn(100)
            .delay(150)
            .removeClass('content_substep_container_inactive')
            .addClass('content_substep_container_active')
            .click(function(){ Load_Record(recordOneName); });
        $('#record_one_delete').fadeIn(100)
            .delay(150)
            .removeClass('content_substep_container_inactive')
            .addClass('content_substep_container_active')
            .click(function(){ Delete_Record(recordOneName); });
        Populate_Stats(recordOneName);
    }
    if(recordTwoBlank === true){
        $('#record_two_create').fadeIn(100)
            .delay(150)
            .removeClass('content_substep_container_inactive')
            .addClass('content_substep_container_active')
            .click(function(){ Create_Record(recordTwoName); });
    }else{
        $('#record_two_load').fadeIn(100)
            .delay(150)
            .removeClass('content_substep_container_inactive')
            .addClass('content_substep_container_active')
            .click(function(){ Load_Record(recordTwoName); });
        $('#record_two_delete').fadeIn(100)
            .delay(150)
            .removeClass('content_substep_container_inactive')
            .addClass('content_substep_container_active')
            .click(function(){ Delete_Record(recordTwoName); });
        Populate_Stats(recordTwoName);
    }
    if(recordThreeBlank === true){
        $('#record_three_create').fadeIn(100)
            .delay(150)
            .removeClass('content_substep_container_inactive')
            .addClass('content_substep_container_active')
            .click(function(){ Create_Record(recordThreeName); });
    }else{
        $('#record_three_load').fadeIn(100)
            .delay(150)
            .removeClass('content_substep_container_inactive')
            .addClass('content_substep_container_active')
            .click(function(){ Load_Record(recordThreeName); });
        $('#record_three_delete').fadeIn(100)
            .delay(150)
            .removeClass('content_substep_container_inactive')
            .addClass('content_substep_container_active')
            .click(function(){ Delete_Record(recordThreeName); });
        Populate_Stats(recordThreeName);
    }
    //* 3 - Populate stats                          *
    function Populate_Stats(recordNumber){
        var savedData = $.JSONCookie(recordNumber),
            type = null,
            complete = null,
            started = null,
            updated = null;
        // Record Type
        type = '-';
        if((savedData.strategySelection.AbundanceAndDistributionCheckbox !== null)&&(savedData.strategySelection.AbundanceAndDistributionConfirm === '#strategy_confirmation_yes')){
            switch(savedData.strategySelection.AbundanceAndDistributionCheckbox){
                case '#strategy_selection_eradication_state_scale':
                    type = 'Eradication';
                    break;
                case '#strategy_selection_containment_state_scale':
                    type = 'Containment';
                    break;
                case '#strategy_selection_eradication_project_scale':
                    type = 'Eradication';
                    break;
                case '#strategy_selection_containment_project_scale':
                    type = 'Containment';
                    break;
                case '#strategy_selection_suppression':
                    type = 'Suppression';
                    break;
            }
        }
        if((savedData.eradication.SocialPoliticalA !== null)||(savedData.containment.SocialPoliticalA !== null)||(savedData.suppression.SocialPoliticalA !== null)){
            if(savedData.eradication.SocialPoliticalA !== null){
                type = 'Eradication';
            }
            if(savedData.containment.SocialPoliticalA !== null){
                type = 'Containment';
            }
            if(savedData.suppression.SocialPoliticalA !== null){
                type = 'Suppression';
            }
        }
        complete = '0 out of 4';
        // Steps Completed
        if(savedData.projectBackground.ImapShareResults !== null){
            complete = '1 out of 4';
        }
        if((savedData.strategySelection.AbundanceAndDistributionConfirm === '#strategy_confirmation_yes')||(savedData.strategySelection.AbundanceAndDistributionAlternative !== null)){
            complete = '2 out of 4';
        }
        // Date Started
        // Date Updated
        switch(recordNumber){
            case recordOneName:
                $('#record_one_stats_type').empty().append(type);
                $('#record_one_stats_complete').empty().append(complete);
                break;
            case recordTwoName:
                $('#record_two_stats_type').empty().append(type);
                $('#record_two_stats_complete').empty().append(complete);
                break;
            case recordThreeName:
                $('#record_three_stats_type').empty().append(type);
                $('#record_three_stats_complete').empty().append(complete);
                break;
        }
    };

    //* 4 - Create_Record(recordNumber)             *
    function Create_Record(recordNumber){
        Unbind_Keys(recordNumber);
        $.JSONCookie(recordNumber, cookieTemplate, {path: '/'});
        if(recordNumber === recordOneName){
            Populate_Stats(recordNumber);
            $('#record_one_create').fadeOut(100)
                .delay(150)
                .removeClass('content_substep_container_active')
                .addClass('content_substep_container_inactive');
            $('#record_one_load').fadeIn(500)
                .delay(550)
                .removeClass('content_substep_container_inactive')
                .addClass('content_substep_container_active')
                .click(function(){ Load_Record(recordOneName); });
            $('#record_one_delete').fadeIn(500)
                .delay(550)
                .removeClass('content_substep_container_inactive')
                .addClass('content_substep_container_active')
                .click(function(){ Delete_Record(recordOneName); });
        }else if(recordNumber === recordTwoName){
            Populate_Stats(recordNumber);
            $('#record_two_create').fadeOut(100)
                .delay(150)
                .removeClass('content_substep_container_active')
                .addClass('content_substep_container_inactive');
            $('#record_two_load').fadeIn(500)
                .delay(550)
                .removeClass('content_substep_container_inactive')
                .addClass('content_substep_container_active')
                .click(function(){ Load_Record(recordTwoName); });
            $('#record_two_delete').fadeIn(500)
                .delay(550)
                .removeClass('content_substep_container_inactive')
                .addClass('content_substep_container_active')
                .click(function(){ Delete_Record(recordTwoName); });
        }else if(recordNumber === recordThreeName){
            Populate_Stats(recordNumber);
            $('#record_three_create').fadeOut(100)
                .delay(150)
                .removeClass('content_substep_container_active')
                .addClass('content_substep_container_inactive');
            $('#record_three_load').fadeIn(500)
                .delay(550)
                .removeClass('content_substep_container_inactive')
                .addClass('content_substep_container_active')
                .click(function(){ Load_Record(recordThreeName); });
            $('#record_three_delete').fadeIn(500)
                .delay(550)
                .removeClass('content_substep_container_inactive')
                .addClass('content_substep_container_active')
                .click(function(){ Delete_Record(recordThreeName); });
        }
    };
    //* 5 - Delete_Record(recordNumber)             *
    function Delete_Record(recordNumber){
        Unbind_Keys(recordNumber);
        $.JSONCookie(recordNumber, {}, {path: '/'});
        if(recordNumber === recordOneName){
            $('#record_one_stats_type').empty().append("N/A");
            $('#record_one_stats_complete').empty().append("N/A");
            $('#record_one_delete').fadeOut(100)
                .delay(150)
                .removeClass('content_substep_container_active')
                .addClass('content_substep_container_inactive');
            $('#record_one_load').fadeOut(100)
                .delay(150)
                .removeClass('content_substep_container_active')
                .addClass('content_substep_container_inactive');
            $('#record_one_create').fadeIn(500)
                .delay(550)
                .removeClass('content_substep_container_inactive')
                .addClass('content_substep_container_active')
                .click(function(){ Create_Record(recordOneName); });
        }else if(recordNumber === recordTwoName){
            $('#record_two_stats_type').empty().append("N/A");
            $('#record_two_stats_complete').empty().append("N/A");
            $('#record_two_delete').fadeOut(100)
                .delay(150)
                .removeClass('content_substep_container_active')
                .addClass('content_substep_container_inactive');
            $('#record_two_load').fadeOut(100)
                .delay(150)
                .removeClass('content_substep_container_active')
                .addClass('content_substep_container_inactive');
            $('#record_two_create').fadeIn(500)
                .delay(550)
                .removeClass('content_substep_container_inactive')
                .addClass('content_substep_container_active')
                .click(function(){ Create_Record(recordTwoName); });
        }else if(recordNumber === recordThreeName){
            $('#record_two_stats_type').empty().append("N/A");
            $('#record_two_stats_complete').empty().append("N/A");
            $('#record_three_delete').fadeOut(100)
                .delay(150)
                .removeClass('content_substep_container_active')
                .addClass('content_substep_container_inactive');
            $('#record_three_load').fadeOut(100)
                .delay(150)
                .removeClass('content_substep_container_active')
                .addClass('content_substep_container_inactive');
            $('#record_three_create').fadeIn(500)
                .delay(550)
                .removeClass('content_substep_container_inactive')
                .addClass('content_substep_container_active')
                .click(function(){ Create_Record(recordThreeName); });
        }

    };
    //* 6 - Load_Record(recordNumber)               *
    function Load_Record(recordNumber){
        Unbind_Keys(recordNumber);
        $('#site_menu').removeClass('content_substep_container_active').addClass('content_substep_container_inactive');
        $('#site_content').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
        IPMDAT_Init(recordNumber);
    };
    //* 7 - Unbind_Keys(recordNumber)               *
    function Unbind_Keys(recordNumber){
        switch(recordNumber){
            case recordOneName:
                $('#record_one_delete').unbind('click');
                $('#record_one_load').unbind('click');
                $('#record_one_create').unbind('click');
                break;
            case recordTwoName:
                $('#record_two_delete').unbind('click');
                $('#record_two_load').unbind('click');
                $('#record_two_create').unbind('click');
                break;
            case recordThreeName:
                $('#record_three_delete').unbind('click');
                $('#record_three_load').unbind('click');
                $('#record_three_create').unbind('click');
                break;
        }
    };
};
