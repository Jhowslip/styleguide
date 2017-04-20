
  // add icons
        var icon_name = option.data('graph');
        var classes = option.attr('class');
        if (!!icon_name) {
          var classString = '';
          if (!!classes) classString = ' class="' + classes + '"';

          // Check for multiple type.
          options.append($('<li class="' + disabledClass + optgroupClass + '"><i class="' + icon_name + '"></i><span>' + multipleCheckbox + option.html() + '</span></li>'));
          return true;
        }
