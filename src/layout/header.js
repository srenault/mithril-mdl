import m from 'mithril';
import attributes from '../attributes';

export let Header = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args);
		let {scroll, waterfall, transparent, castShadow} = args;

		attr.class.push('mdl-layout__header');

		if(scroll) attr.class.push('mdl-layout__header--scroll');
		if(waterfall) attr.class.push('mdl-layout__header--waterfall');
		if(transparent) attr.class.push('mdl-layout__header--transparent');
		if(castShadow) attr.class.push('is-casting-shadow');

		return <header {...attr}>{children}</header>;
	}
};

export let HeaderRow = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args);
		attr.class.push('mdl-layout__header-row');

		return <div {...attr}>{children}</div>;
	}
};
