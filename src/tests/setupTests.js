// configuring enzyme adapter to create support for our react version
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';
DotEnv.config({ path: '.env.test' });
Enzyme.configure({
    adapter: new Adapter(),
});
