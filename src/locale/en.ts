export const en_US = {
    homeView: {
        subTitle: 'WebHulkTest is the ideal solution for developers who need to test APIs that respond asynchronously via webhooks.',

        sectionInfoCard: {
            forDev: {
                title: 'For Developers',
                content: 'Designed for scenarios where you don’t yet have a production service and are testing in a local environment.'
            },
            testFromWebHooks: {
                title: 'Webhook Testing',
                content: 'Simulate and validate webhook responses from platforms like Stripe, PayPal, and other asynchronous APIs.'
            },
            safeEnviroment: {
                title: 'Secure Environment',
                content: 'Provides a safe and efficient environment for testing, speeding up your development and testing process.'
            }
        },

        sectionResourcePrincipal: {
            title: 'Main Features',
            API: {
                title: 'Flexible API',
                content: 'Make requests to check the status of your webhook.'
            },
            connectionLocal: {
                title: 'Local Connection',
                content: 'Connect to your local webhook while the tab is open.'
            },
            privacyGuaranteed: {
                title: 'Privacy Guaranteed',
                content: 'All posts are deleted 3 minutes after being read.'
            }
        },

        sectionHowWorking: {
            title: "How It Works",
            subTitle: 'You can receive your messages in two ways:',
            msgWebhookLocal: {
                point: 'Local Webhook',
                content: 'Implement a local webhook (with ready-to-use examples available) and configure it in WebHulkTest. While the browser tab is open, all received messages will be forwarded to your local webhook, providing a production-like testing experience.'
            },
            msgRequestGET: {
                point: 'GET Request',
                content: 'Make a simple GET request to the WebHulkTestApi to receive all new messages. This method is more limited, as the data will be grouped into a single response, but it’s simpler and allows you to do much more with WebHulkTest beyond its initial purpose.'
            }
        },

        sectionOurPlans: {
            title: 'Our Plans',
            button: 'Choose Plan',

            planBasic: {
                title: 'Basic Plan',
                subTitle: 'Perfect for starting a new test right now!',
                benefits: [
                    {
                        benefit: true,
                        text: '50 API requests per minute',
                    },
                    {
                        benefit: true,
                        text: '150 posts to the webhook per minute',
                    },
                    {
                        benefit: true,
                        text: 'Privacy and security for webhook messages',
                    },
                    {
                        benefit: true,
                        text: 'API calls',
                    },
                    {
                        benefit: false,
                        text: 'Receive messages via localhost webhook (learn more)',
                    }
                ]
            },

            planIntermediate: {
                title: 'Intermediate Plan',
                subTitle: 'Not too little, not too much—just right!',
                benefits: [
                    {
                        benefit: true,
                        text: '250 API requests per minute',
                    },
                    {
                        benefit: true,
                        text: '1500 webhook posts per minute',
                    },
                    {
                        benefit: true,
                        text: 'Privacy and security for webhook messages',
                    },
                    {
                        benefit: true,
                        text: 'API calls',
                    },
                    {
                        benefit: true,
                        text: 'Receive webhook messages on localhost (learn more)',
                    }
                ]
            },

            planFull: {
                title: 'Full Plan',
                subTitle: 'When you need more than a simple test.',
                benefits: [
                    {
                        benefit: true,
                        text: '1000 API requests per minute',
                    },
                    {
                        benefit: true,
                        text: '1500 posts to the webhook per minute',
                    },
                    {
                        benefit: true,
                        text: 'Privacy and security for webhook messages',
                    },
                    {
                        benefit: true,
                        text: 'API calls',
                    },
                    {
                        benefit: true,
                        text: 'Receive messages via localhost webhook (learn more)',
                    }
                ]
            }
        },

        footer: '© 2024 WebHulkTest. All rights reserved.'
    }
};
