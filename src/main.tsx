import m from 'mithril';
import { ApiExamplePage } from './pages/ApiExamplePage';
import { FormExamplePage } from './pages/FormExamplePage';
import { HomePage } from './pages/HomePage';
import './style.css';

m.route(document.body, '/', {
    '/': HomePage,
    '/api-example': ApiExamplePage,
    '/form-example': FormExamplePage,
});
