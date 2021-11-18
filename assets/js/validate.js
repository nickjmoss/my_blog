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

    function validateForm(element) {
        if ($(element).attr('type')=='text') {
            let elementText = $(element).val()
            if (elementText == '') {
                $(element).addClass('invalid');
            }
            else {
                $(element).attr('class', '');
            }
        }
    }

    
    
}
    

$(function() {
    initValidation('form')
});
