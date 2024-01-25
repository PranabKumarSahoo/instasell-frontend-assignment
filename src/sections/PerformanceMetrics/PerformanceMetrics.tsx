import React from 'react';
import './PerformanceMetrics.css';
import { BlockStack, Box, Button, ButtonGroup, Card, Image, InlineGrid, InlineStack, Text } from '@shopify/polaris';
import Ellipse1 from '../../assets/Ellipse 32.svg';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Title, ArcElement, Legend } from 'chart.js';

interface PlaceholderProps {
    background: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ background }) => {
    return (
        <div
            style={{
                background,
                padding: '6px 10px',
                borderRadius: '7px',
            }}
        />
    );
};

ChartJS.register(
    Tooltip, Title, ArcElement, Legend
);

const data = {
    datasets: [{
        data: [63, 102, 52, 105, 59],
        backgroundColor: [
            '#956F00',
            '#5E4200',
            '#FFDDB6',
            '#FFC879',
            '#E5A500',
        ]
    }],
};

const PerformanceMetrics: React.FC = () => {
    return (
        <div className='perf-container'>
            <div className='perf-section-container'>
                <p className='perf-title'>Instant Dive into Your Performance Metrics</p>
                <div className='menu-button'>
                    <div style={{ padding: '10px', backgroundColor: '#F8F7FF', borderRadius: '4px', border: '1px solid #8051FF' }}>
                        <Text fontWeight='semibold' as="p">
                            Lifetime
                        </Text>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
                        <Text fontWeight='semibold' as="p">
                            Last Week
                        </Text>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
                        <Text fontWeight='semibold' as="p">
                            Last Week
                        </Text>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
                        <Text fontWeight='semibold' as="p">
                            Last Year
                        </Text>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
                        <Text fontWeight='semibold' as="p">
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
                                Customize Time Line
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 3.5C7.75 3.08579 7.41421 2.75 7 2.75C6.58579 2.75 6.25 3.08579 6.25 3.5V3.90665C6.00413 3.96421 5.77128 4.04472 5.54754 4.15873C4.84193 4.51825 4.26825 5.09193 3.90873 5.79754C3.68239 6.24175 3.58803 6.7219 3.54336 7.26853C3.49999 7.79944 3.49999 8.45505 3.5 9.26789V10.7321C3.49999 11.5449 3.49999 12.2006 3.54336 12.7315C3.58803 13.2781 3.68239 13.7582 3.90873 14.2025C4.26825 14.9081 4.84193 15.4817 5.54754 15.8413C5.99175 16.0676 6.4719 16.162 7.01853 16.2066C7.54944 16.25 8.20505 16.25 9.01788 16.25L12.4013 16.25C12.7236 16.25 12.943 16.2501 13.1364 16.23C14.9018 16.0472 16.2972 14.6518 16.48 12.8864C16.5001 12.693 16.5 12.4736 16.5 12.1514L16.5 9.26788C16.5 8.45505 16.5 7.79944 16.4566 7.26853C16.412 6.7219 16.3176 6.24175 16.0913 5.79754C15.7317 5.09193 15.1581 4.51825 14.4525 4.15873C14.2287 4.04472 13.9959 3.96421 13.75 3.90665V3.5C13.75 3.08579 13.4142 2.75 13 2.75C12.5858 2.75 12.25 3.08579 12.25 3.5V3.75859C11.8765 3.74999 11.456 3.75 10.9821 3.75H9.0179C8.54396 3.75 8.12348 3.74999 7.75 3.75859V3.5ZM6.22852 5.49524C6.42604 5.3946 6.68681 5.32547 7.14068 5.28838C7.60331 5.25058 8.19755 5.25 9.05 5.25H10.95C11.8025 5.25 12.3967 5.25058 12.8593 5.28838C13.3132 5.32547 13.574 5.3946 13.7715 5.49524C14.1948 5.71095 14.5391 6.05516 14.7548 6.47852C14.8554 6.67604 14.9245 6.9368 14.9616 7.39068C14.9764 7.57123 14.9855 7.77183 14.991 8H5.00895C5.01455 7.77183 5.02363 7.57123 5.03838 7.39068C5.07547 6.9368 5.1446 6.67604 5.24524 6.47852C5.46095 6.05516 5.80516 5.71095 6.22852 5.49524ZM5 9.5V10.7C5 11.5525 5.00058 12.1467 5.03838 12.6093C5.07547 13.0632 5.1446 13.324 5.24524 13.5215C5.46095 13.9448 5.80516 14.289 6.22852 14.5048C6.42604 14.6054 6.68681 14.6745 7.14068 14.7116C7.60331 14.7494 8.19755 14.75 9.05 14.75H12.3557C12.7407 14.75 12.8759 14.749 12.9818 14.738C14.0411 14.6283 14.8783 13.7911 14.988 12.7318C14.999 12.6259 15 12.4907 15 12.1057V9.5H5Z" fill="#4A4A4A" />
                                </svg>
                            </div>
                        </Text>
                    </div>
                </div>
                <div className='perf-card-container'>
                    <div className='perf-left-card'>
                        <Card roundedAbove="sm" padding="500">
                            <BlockStack gap="200">
                                <InlineGrid columns="1fr auto">
                                    <Text as="h2" variant="headingSm">
                                        Shipment Updates
                                    </Text>
                                    <Text as="p">Total Orders: 394</Text>
                                </InlineGrid>
                                <div className='card-menu-buttons'>
                                    <div className='card-menu-button' style={{ backgroundColor: '#FFF1E3' }}>
                                        <Text fontWeight='semibold' as="p">
                                            Delivered
                                        </Text>
                                    </div>
                                    <div className='card-menu-button'>
                                        <Text fontWeight='semibold' as="p">
                                            Out for delivery
                                        </Text>
                                    </div>
                                    <div className='card-menu-button'>
                                        <Text fontWeight='semibold' as="p">
                                            Intransit
                                        </Text>
                                    </div>
                                    <div className='card-menu-button'>
                                        <Text fontWeight='semibold' as="p">
                                            Pending
                                        </Text>
                                    </div>
                                    <div className='card-menu-button'>
                                        <Text fontWeight='semibold' as="p">
                                            Exception
                                        </Text>
                                    </div>
                                </div>
                                <div className='doughnut-chart'>
                                    <Doughnut
                                        data={data}
                                    />
                                </div>
                                <div className='card-footer-items'>
                                    <div className='upper-items'>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                            <Box>
                                                <Placeholder background='#5E4200' />
                                            </Box>
                                            <Text as="p">Exception</Text>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                            <Box>
                                                <Placeholder background='#956F00' />
                                            </Box>
                                            <Text as="p">Intransit</Text>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                            <Box>
                                                <Placeholder background='#E5A500' />
                                            </Box>
                                            <Text as="p">Pending</Text>
                                        </div>
                                    </div>
                                    <div className='below-items'>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                            <Box>
                                                <Placeholder background='#FFC879' />
                                            </Box>
                                            <Text as="p">Delivered</Text>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                            <Box>
                                                <Placeholder background='#FFDDB6' />
                                            </Box>
                                            <Text as="p">Out for delivery</Text>
                                        </div>
                                    </div>
                                </div>
                            </BlockStack>
                        </Card>
                    </div>
                    <div className='perf-middle-card'>
                        <Card roundedAbove="sm" background='bg-fill-warning-active'>
                            <BlockStack gap="800">
                                <Text as="p" variant="headingSm">
                                    Star Facts about your orders!!!
                                </Text>
                                <BlockStack>
                                    <Text as="p" variant="headingSm" fontWeight="regular">
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontWeight: '400' }}>
                                            <span>There are 8 shipments that have been in out for delivery for more than 3 days.</span>
                                            <br />
                                            <span>There are 5 shipments in exception right now</span>
                                            <br />
                                            <span>The maximum chargebacks are from Miami.</span>
                                        </div>
                                    </Text>
                                    <Image source={Ellipse1} alt='Ellipse Illustration' className='ellpise-img' />
                                </BlockStack>
                                <InlineStack align="start">
                                    <ButtonGroup>
                                        <Button variant="secondary">Check Orders Page</Button>
                                    </ButtonGroup>
                                </InlineStack>
                            </BlockStack>
                        </Card>
                    </div>
                    <div className='perf-right-card'>
                        <Card roundedAbove="sm">
                            <BlockStack gap="600">
                                <Text as="h2" variant="headingSm">
                                    Tracking Page Views Vs Orders
                                </Text>
                                <BlockStack>
                                    <Text as="p" variant="headingSm" fontWeight="regular">
                                        Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.
                                    </Text>
                                </BlockStack>
                                <Card roundedAbove="sm" padding="500" background='bg-surface-warning-hover'>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div>
                                            <Text as="h2" variant="headingSm">
                                                Orders
                                            </Text>
                                            <Text as="h2" variant="heading3xl">
                                                80
                                            </Text>
                                        </div>
                                        <div>
                                            <Text as="h2" variant="headingSm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5315 9.8C15.7147 9.8 12.474 12.596 11.9146 16.3716L10.0645 28.8598C9.8884 30.0485 9.79999 31.2486 9.79999 32.4503V37.1C9.79999 42.1258 13.8742 46.2 18.9 46.2H37.1C42.1258 46.2 46.2 42.1258 46.2 37.1V32.4503C46.2 31.2486 46.1116 30.0485 45.9355 28.8598L44.0854 16.3716C43.526 12.596 40.2853 9.8 36.4685 9.8H19.5315ZM16.0693 16.9871C16.3235 15.2709 17.7966 14 19.5315 14H36.4685C38.2034 14 39.6765 15.2709 39.9307 16.9871L41.5623 28H34.6091C33.1025 28 31.7651 28.964 31.2887 30.3932L30.8459 31.7214C30.7507 32.0072 30.4832 32.2 30.1819 32.2H25.8181C25.5168 32.2 25.2493 32.0072 25.154 31.7214L24.7113 30.3932C24.2349 28.964 22.8974 28 21.3909 28H14.4377L16.0693 16.9871ZM14.0015 32.2C14.0005 32.2834 14 32.3668 14 32.4503V37.1C14 39.8062 16.1938 42 18.9 42H37.1C39.8062 42 42 39.8062 42 37.1V32.4503C42 32.3668 41.9995 32.2834 41.9984 32.2H35.1136L34.8304 33.0495C34.1635 35.0504 32.291 36.4 30.1819 36.4H25.8181C23.709 36.4 21.8365 35.0504 21.1696 33.0495L20.8864 32.2H14.0015Z" fill="#4A4A4A" />
                                                </svg>
                                            </Text>
                                        </div>
                                    </div>
                                </Card>
                                <Card roundedAbove="sm" padding="500" background='bg-fill-warning-hover'>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div>
                                            <Text as="h2" variant="headingSm">
                                                Tracking Page Views
                                            </Text>
                                            <Text as="h2" variant="heading3xl">
                                                44
                                            </Text>
                                        </div>
                                        <div>
                                            <Text as="h2" variant="headingSm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3 21.6C33.3 26.4601 29.3601 30.4 24.5 30.4C19.6399 30.4 15.7 26.4601 15.7 21.6C15.7 16.7399 19.6399 12.8 24.5 12.8C29.3601 12.8 33.3 16.7399 33.3 21.6ZM28.9 21.6C28.9 24.0301 26.9301 26 24.5 26C22.0699 26 20.1 24.0301 20.1 21.6C20.1 19.1699 22.0699 17.2 24.5 17.2C26.9301 17.2 28.9 19.1699 28.9 21.6Z" fill="#4A4A4A" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 4C17.2357 4 11.7445 7.60732 8.13976 11.4277C6.33527 13.3401 4.9645 15.3433 4.03497 17.0664C3.57031 17.9278 3.20321 18.7427 2.94659 19.4636C2.70953 20.1296 2.5 20.8966 2.5 21.6C2.5 22.3034 2.70953 23.0704 2.94659 23.7364C3.20321 24.4573 3.57031 25.2722 4.03497 26.1336C4.9645 27.8567 6.33527 29.8599 8.13976 31.7723C11.7445 35.5927 17.2357 39.2 24.5 39.2C31.7643 39.2 37.2555 35.5927 40.8602 31.7723C42.6647 29.8599 44.0355 27.8567 44.965 26.1336C45.4297 25.2722 45.7968 24.4573 46.0534 23.7364C46.2905 23.0704 46.5 22.3034 46.5 21.6C46.5 20.8966 46.2905 20.1296 46.0534 19.4636C45.7968 18.7427 45.4297 17.9278 44.965 17.0664C44.0355 15.3433 42.6647 13.3401 40.8602 11.4277C37.2555 7.60732 31.7643 4 24.5 4ZM6.90414 21.6061L6.90301 21.6L6.90414 21.5939C6.91493 21.5358 6.9536 21.3274 7.09183 20.9391C7.25988 20.467 7.52838 19.8581 7.90745 19.1554C8.66538 17.7504 9.81455 16.0641 11.34 14.4473C14.3952 11.2093 18.804 8.4 24.5 8.4C30.196 8.4 34.6048 11.2093 37.66 14.4473C39.1854 16.0641 40.3346 17.7504 41.0926 19.1554C41.4716 19.8581 41.7401 20.467 41.9082 20.9391C42.0464 21.3274 42.0851 21.5358 42.0959 21.5939L42.097 21.6L42.0959 21.6061C42.0851 21.6642 42.0464 21.8726 41.9082 22.2609C41.7401 22.733 41.4716 23.3419 41.0926 24.0446C40.3346 25.4496 39.1854 27.1359 37.66 28.7527C34.6048 31.9907 30.196 34.8 24.5 34.8C18.804 34.8 14.3952 31.9907 11.34 28.7527C9.81455 27.1359 8.66538 25.4496 7.90745 24.0446C7.52838 23.3419 7.25988 22.733 7.09183 22.2609C6.9536 21.8726 6.91493 21.6642 6.90414 21.6061Z" fill="#4A4A4A" />
                                                </svg>
                                            </Text>
                                        </div>
                                    </div>
                                </Card>
                            </BlockStack>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PerformanceMetrics;