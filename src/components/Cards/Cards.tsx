import React from 'react';
import {
    BlockStack,
    Button,
    ButtonGroup,
    Card,
    InlineStack,
    Text,
} from '@shopify/polaris';

interface CardProps {
    title: string;
    content: string;
    buttonText: string;
    onButtonClick: () => void;
    children?: React.ReactNode;
    background?: 'bg-surface' | 'bg-secondary' | 'bg-primary' | 'bg-emphasized' | 'bg-surface-caution';
    padding?: { [Breakpoint in 'xs' | 'sm' | 'md' | 'lg' | 'xl']?: "" };
    roundedAbove?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const CardComponent: React.FC<CardProps> = ({
    title,
    content,
    buttonText,
    onButtonClick,
    children,
}) => {

    return (
        <div style={{ width: "340px" }}>
            <Card background='bg-surface' padding='500' roundedAbove='sm'>
                <BlockStack gap="400">
                    <Text as="h2" variant="headingMd">
                        {title}
                    </Text>
                    <BlockStack>
                        <Text as="p" variant="headingSm" fontWeight="regular">
                            {content}
                        </Text>
                    </BlockStack>
                    {children}
                    <InlineStack align="start">
                        <ButtonGroup>
                            <Button variant="primary" accessibilityLabel={buttonText} onClick={onButtonClick}>
                                {buttonText}
                            </Button>
                        </ButtonGroup>
                    </InlineStack>
                </BlockStack>
            </Card>
        </div>
    );
};

export default CardComponent;
