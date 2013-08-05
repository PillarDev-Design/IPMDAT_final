/******************************************************************************\
 * IPMDAT_records.js                                                          *
 * -------------------------------------------------------------------------- *
 * This file contains the record management for the IPMDAT project.           *
\******************************************************************************/
function Determine_Records(){
    /***********************************************\
     * Determine_Records()
     * --------------------------------------------
     * 1 - Declare Variables
     * 2 - Determine if records are created
     * 3 - Assign functionality
    \************************************************/
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

    if(recordOneBlank === true){
        $('#record_one_create').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
        $('#record_one_create').click(function(){ Create_Record(recordOneName); });
    }else{
        $('#record_one_load').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
        $('#record_one_delete').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
        $('#record_one_load').click(function(){ Load_Record(recordOneName); });
        $('#record_one_delete').click(function(){ Delete_Record(recordOneName); });
    }
    if(recordTwoBlank === true){
        $('#record_two_create').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
        $('#record_two_create').click(function(){ Create_Record(recordTwoName); });
    }else{
        $('#record_two_load').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
        $('#record_two_delete').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
        $('#record_two_load').click(function(){ Load_Record(recordTwoName); });
        $('#record_two_delete').click(function(){ Delete_Record(recordTwoName); });
    }
    if(recordThreeBlank === true){
        $('#record_three_create').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
        $('#record_three_create').click(function(){ Create_Record(recordThreeName); });
    }else{
        $('#record_three_load').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
        $('#record_three_delete').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
        $('#record_three_load').click(function(){ Load_Record(recordThreeName); });
        $('#record_three_delete').click(function(){ Delete_Record(recordThreeName); });
    }

    function Create_Record(recordNumber){
        $.JSONCookie(recordNumber, cookieTemplate, {path: '/'});
        if(recordNumber === recordOneName){
            $('#record_one_create').unbind('click');
            $('#record_one_create').removeClass('content_substep_container_active').addClass('content_substep_container_inactive');

            $('#record_one_load').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
            $('#record_one_load').click(function(){ Load_Record(recordOneName); });
            $('#record_one_delete').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
            $('#record_one_delete').click(function(){ Delete_Record(recordOneName); });
        }else if(recordNumber === recordTwoName){
            $('#record_two_create').unbind('click');
            $('#record_two_create').removeClass('content_substep_container_active').addClass('content_substep_container_inactive');

            $('#record_two_load').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
            $('#record_two_load').click(function(){ Load_Record(recordTwoName); });
            $('#record_two_delete').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
            $('#record_two_delete').click(function(){ Delete_Record(recordTwoName); });
        }else if(recordNumber === recordThreeName){
            $('#record_three_create').unbind('click');
            $('#record_three_create').removeClass('content_substep_container_active').addClass('content_substep_container_inactive');

            $('#record_three_load').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
            $('#record_three_load').click(function(){ Load_Record(recordThreeName); });
            $('#record_three_delete').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
            $('#record_three_delete').click(function(){ Delete_Record(recordThreeName); });
        }
    };
    function Delete_Record(recordNumber){
        $.JSONCookie(recordNumber, {}, {path: '/'});
        if(recordNumber === recordOneName){
            $('#record_one_delete').unbind('click');
            $('#record_one_delete').removeClass('content_substep_container_active').addClass('content_substep_container_inactive');
            $('#record_one_load').unbind('click');
            $('#record_one_load').removeClass('content_substep_container_active').addClass('content_substep_container_inactive');

            $('#record_one_create').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
            $('#record_one_create').click(function(){ Load_Record(recordOneName); });
        }else if(recordNumber === recordTwoName){
            $('#record_two_delete').unbind('click');
            $('#record_two_delete').removeClass('content_substep_container_active').addClass('content_substep_container_inactive');
            $('#record_two_load').unbind('click');
            $('#record_two_load').removeClass('content_substep_container_active').addClass('content_substep_container_inactive');

            $('#record_two_create').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
            $('#record_two_create').click(function(){ Load_Record(recordTwoName); });
        }else if(recordNumber === recordThreeName){
            $('#record_three_delete').unbind('click');
            $('#record_three_delete').removeClass('content_substep_container_active').addClass('content_substep_container_inactive');
            $('#record_three_load').unbind('click');
            $('#record_three_load').removeClass('content_substep_container_active').addClass('content_substep_container_inactive');

            $('#record_three_create').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
            $('#record_three_create').click(function(){ Load_Record(recordThreeName); });
        }

    };
    function Load_Record(recordNumber){
        console.log('LOADING');
        $('#site_menu').removeClass('content_substep_container_active').addClass('content_substep_container_inactive');
        $('#site_content').removeClass('content_substep_container_inactive').addClass('content_substep_container_active');
        IPMDAT_Init(recordNumber);
    };
};
