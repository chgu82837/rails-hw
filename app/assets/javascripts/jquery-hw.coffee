rAccess = (obj,keyArr,i = 0) ->
    if i is keyArr.length - 1 then obj[keyArr[i]] else rAccess obj[keyArr[i]],keyArr,i+1

jQuery ->
    re = /\{[\w\.]+\}/gm

    jQuery 'script[type=jsx-each]'
    .each (ji,jsx) ->
        $jsx = jQuery jsx
        src = $jsx.html()
        rep = ([
            r,
            r.replace /\{|\}/gm,""
            .split "."
        ] for r in src.match re)
        jQuery.ajax
            url: $jsx.attr 'src'
            success: (result) ->
                result.forEach (r) ->
                    t = src
                    for p in rep
                        ra = rAccess r,p[1]
                        t = t.replace p[0], ra
                    $jsx.before jQuery t
            error: (e,xhr) ->
                console.error e, xhr

    jQuery '#go'
    .click ->
        jQuery '.hide, .emphises, .done'
            .removeClass 'hide emphises done'
        jQuery '.github-' + jQuery('#type-select').val()
        .addClass(jQuery('input[name=act]:checked').val())
