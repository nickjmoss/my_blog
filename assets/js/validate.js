const stateAbbreviations = [
    'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
];

function initValidation(formName) {
    
    let $form = $(formName);

    $(':input').blur(function() {
        validateForm(this);
    })

    $form.submit(function(event){
        $form = $("form");
        formEl=$form.get(0);
        checked = $("input[type=checkbox]:checked").length;
    
        event.preventDefault();  //prevent default browser submit
        event.stopPropagation(); //stop event bubbling

        if (!formEl.checkValidity()){
            for (element of formEl) {
                validateForm(element)
            }
            if(!checked) {
                $('#referral').addClass('invalid');
            } 
        }
        else{
            if(!checked) {
                $('#referral').addClass('invalid');
            } 
            else {
                $('#referral').attr('class', '');
                $(".form-group2").hide()
                $(".thanks-message").show();
            }
        }
    });

    function validateForm(element) {
        if ($(element).attr('required')){

            if ($(element).attr('type')=='text' || $(element).attr('type')=='address' || $(element).attr('type')=='city') {
                let elementText = $(element).val()
                if (elementText == '') {
                    $(element).addClass('invalid');
                }
                else {
                    $(element).attr('class', '');
                }
            }

            if($(element).attr('type')=='phone') {
                let phoneNum = $(element).val()
                let regex = new RegExp($(element).attr('pattern'))
                if (phoneNum == '' || !(regex.test(phoneNum))) {
                    $(element).addClass('invalid');
                }
                else {
                    $(element).attr('class', '');
                }
            }

            if($(element).attr('type')=='email') {
                let email = $(element).val()
                let regex = new RegExp($(element).attr('pattern'))
                if (email == '' || !(regex.test(email))) {
                    $(element).addClass('invalid');
                }
                else {
                    $(element).attr('class', '');
                }
            }

            if($(element).attr('type')=='state') {
                let state = $(element).val().toUpperCase()
                let minLength = $(element).attr('minlength');
                let maxLength = $(element).attr('maxlength');

                if (state.length < minLength || state.length > maxLength || !(stateAbbreviations.includes(state))) {
                    console.log(state in stateAbbreviations);
                    $(element).addClass('invalid');
                }
                else {
                    $(element).attr('class', '');
                }
            }

            if($(element).attr('type')=='zip') {
                let zip = $(element).val()
                let regex = new RegExp($(element).attr('pattern'))
                if (zip == '' || !(regex.test(zip))) {
                    $(element).addClass('invalid');
                }
                else {
                    $(element).attr('class', '');
                }
            }
            
        }
    }

    
    
}
    

$(function() {
    initValidation('form')
});
