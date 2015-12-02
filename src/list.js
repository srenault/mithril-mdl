import m from 'mithril';
import attributes from './attributes';
import {Icon} from './misc';

export let List = {
    view(ctrl, args, ...children) {
        return <ul class="mdl-list">{children}</ul>;
    }
};

export let ActionListItem = {
    view(ctrl, args, title) {
        args = args || {};
        let {icon, subtitle} = args;

        return <li class="mdl-list__item mdl-list__item-two-line">
            <span class="mdl-list__item-primary-content">
              <Icon>{icon}</Icon>&nbsp;
              <span class="mdl-list__item-title">{title}</span>
              <span class="mdl-list__item-sub-title">{subtitle}</span>
            </span>
        </li>;
    }
};

export let TwoLineListItem = {
    view(ctrl, args, text) {
        args = args || {};
        let {icon, subtitle, secondaryInfo, secondaryIcon} = args;

        return <li class="mdl-list__item mdl-list__item-two-line">
            <span class="mdl-list__item-primary-content">
              <Icon class="mdl-list__item-icon">{icon}</Icon>&nbsp;
              <span class="mdl-list__item-text">{text}</span>
              <span class="mdl-list__item-sub-title">{subtitle}</span>
            </span>
            <span class="mdl-list__item-secondary-content">
              <span class="mdl-list__item-secondary-info">{secondaryInfo}</span>
              <a class="mdl-list__item-secondary-action" href="#">
                <Icon>{secondaryIcon}</Icon>
              </a>
            </span>
        </li>;
    }
};

export let ThreeLineListItem = {
    view(ctrl, args, title) {
        args = args || {};
        let {icon, body, secondaryInfo, secondaryIcon} = args;

        return <li class="mdl-list__item mdl-list__item-three-line">
            <span class="mdl-list__item-primary-content">
              <Icon class="mdl-list__item-icon">{icon}</Icon>&nbsp;
              <span class="mdl-list__item-title">{title}</span>
              <span class="mdl-list__item-text-body">{body}</span>
            </span>
            <span class="mdl-list__item-secondary-content">
              <span class="mdl-list__item-secondary-info">{secondaryInfo}</span>
              <a class="mdl-list__item-secondary-action" href="#">
                <Icon>{secondaryIcon}</Icon>
              </a>
            </span>
        </li>;
    }
};

export let IconListItem = {
    view(ctrl, args, text) {
        args = args || {};
        let {icon} = args;

        return <li class="mdl-list__item">
            <span class="mdl-list__item-primary-content">
              <Icon>{icon}</Icon>
              {text}
            </span>
        </li>;
    }
};

export let ListItem = {
    view(ctrl, args, text) {

        return <li class="mdl-list__item">
            <span class="mdl-list__item-primary-content">
              {text}
            </span>
        </li>;
    }
};

export let ControlListItem = {
    view(ctrl, args, text) {
        args = args || {};
        let {icon, action} = args;

        return <li class="mdl-list__item">
            <span class="mdl-list__item-primary-content">
              <Icon class="mdl-list__item-icon">{icon}</Icon>
              {text}
            </span>
            <span class="mdl-list__item-secondary-action">
              {action}
            </span>
        </li>;
    }
};
