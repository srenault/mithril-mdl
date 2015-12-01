import m from 'mithril';
import attributes from '../attributes';

export let Tabs = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args, true);
		attr.class.push('mdl-layout__tab-bar');

		return <div {...attr}>{children}</div>;
	}
};

export let Tab = {
	view(ctrl, args, title) {
		args = args || {};
		let attr = attributes(args, args.config);
		attr.class.push('mdl-layout__tab');
		attr.href = args.href;

		return <a {...attr}>{title}</a>;
	}
};

export let TabPanel = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args, args.config);
		attr.class.push('mdl-layout__tab-panel');

		return <section {...attr}>{children}</section>;
	}
};
