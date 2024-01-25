import './OurFunctionality.css';
import Img1 from '../../assets/img1.png';
import Img2 from '../../assets/img2.png';
import Img3 from '../../assets/img3.png';
import Img4 from '../../assets/img4.png';
import Img5 from '../../assets/img5.png';
import {
    Bleed,
    BlockStack,
    Box,
    Button,
    ButtonGroup,
    Card,
    Image,
    InlineStack,
    Text,
    TextField,
} from '@shopify/polaris';

interface PlaceholderProps {
    background: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ background }) => {
    return (
        <div
            style={{
                background,
                padding: '17px',
                borderRadius: '7px',
                position: 'relative',
                top: '24px',
                width: '80px',
            }}
        />
    );
};

const OurFunctionality: React.FC = () => {

    return (
        <div className='funct-container'>
            <div className='funct-section-container'>
                <p className='funct-title'>Discover the Heart of Our Functionality</p>
                <div className="funct-card-container">
                    <div className='funct-left-card'>
                        <Card roundedAbove="sm">
                            <BlockStack gap="400">
                                <Text as="h2" variant="headingSm">
                                    Elevate Your Brand Aesthetics with Custom Tracking Page Styles
                                </Text>
                                <BlockStack>
                                    <Text as="p" variant="headingSm" fontWeight="regular">
                                        Immerse your customers in a branded experience by personalizing the colors on your tracking page.
                                    </Text>
                                </BlockStack>
                                <BlockStack gap="500">
                                    <div className='color-box-container'>
                                        <TextField
                                            label="Accent Color"
                                            autoComplete="on"
                                            value='FF9898'
                                        />
                                        <Box>
                                            <Placeholder background='#FF9898' />
                                        </Box>
                                    </div>
                                    <div className='color-box-container'>
                                        <TextField
                                            label="Text Color"
                                            autoComplete="on"
                                            value='571010'
                                        />
                                        <Box>
                                            <Placeholder background='#571010' />
                                        </Box>
                                    </div>
                                    <div className='color-box-container'>
                                        <TextField
                                            label="Background Color"
                                            autoComplete="on"
                                            value='FFEAEA'
                                        />
                                        <Box>
                                            <Placeholder background='#FFEAEA' />
                                        </Box>
                                    </div>
                                </BlockStack>
                                <InlineStack align="start">
                                    <ButtonGroup>
                                        <Button>Preview</Button>
                                        <Button variant="primary">Apply Colors</Button>
                                    </ButtonGroup>
                                </InlineStack>
                            </BlockStack>
                        </Card>
                    </div>
                    <div className='funct-middle-card'>
                        <Card roundedAbove="sm">
                            <BlockStack gap="400">
                                <Text as="h2" variant="headingSm">
                                    Exclusive Onboarding Support for High-Volume Brands
                                </Text>
                                <BlockStack>
                                    <Text as="p" variant="headingSm" fontWeight="regular">
                                        Unlock personalized guidance! Book a one-on-one
                                        onboarding call to streamline your experience.
                                    </Text>
                                </BlockStack>
                                <InlineStack align="start">
                                    <ButtonGroup>
                                        <Button variant="primary">Scheduled A Call</Button>
                                    </ButtonGroup>
                                </InlineStack>
                            </BlockStack>
                        </Card>
                        <Card roundedAbove="sm">
                            <BlockStack gap="500">
                                <Text as="h2" variant="headingSm">
                                    Explore Our Integrated Ecosystem
                                </Text>
                                <BlockStack>
                                    <Text as="p" variant="headingSm" fontWeight="regular">
                                        Discover a variety of popular integrations tailored for your convenience.
                                    </Text>
                                </BlockStack>
                                <Bleed>
                                    <div style={{ display: "flex", gap: "20px" }}>
                                        <Image source={Img1} alt="Image 1" />
                                        <Image source={Img2} alt="Image 2" />
                                        <Image source={Img3} alt="Image 3" />
                                        <Image source={Img4} alt="Image 4" />
                                        <Image source={Img5} alt="Image 5" />
                                    </div>
                                </Bleed>
                                <InlineStack align="start">
                                    <ButtonGroup>
                                        <Button variant="primary">Explore Integration</Button>
                                    </ButtonGroup>
                                </InlineStack>
                            </BlockStack>
                        </Card>
                    </div>
                    <div className='funct-right-card'>
                        <Card roundedAbove="sm">
                            <BlockStack gap="200">
                                <Text as="h2" variant="headingSm">
                                    Seamlessly Integrate Custom HTML Elements
                                </Text>
                                <BlockStack gap="400">
                                    <Text as="p" variant="headingSm" fontWeight="regular">
                                        Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.
                                    </Text>
                                    <TextField
                                        label="HTML Link"
                                        autoComplete="on"
                                        placeholder='Value'
                                        multiline={7}
                                    />
                                </BlockStack>
                                <InlineStack align="start">
                                    <ButtonGroup>
                                        <Button>Preview</Button>
                                        <Button variant="primary">Apply Changes</Button>
                                    </ButtonGroup>
                                </InlineStack>
                            </BlockStack>
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default OurFunctionality;