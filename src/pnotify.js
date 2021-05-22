import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core';
import 'material-design-icons/iconfont/material-icons.css';


defaults.styling = 'material';
defaults.icons = 'material';
defaults.delay = 500;


const { alert, notice, info, success, error } = require('@pnotify/core');

export default error;