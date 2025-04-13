import React, { useState, useMemo, useEffect } from "react";
import { Tab } from "@/components/Tab";
import { Button } from "@/components/Button";
import { Api } from "@/assets/api/api";
import { JobCard } from "@/components/Card";
import UrlHandler from "../../common/url/UrlHandler";

function TabContentTemplate(props) {
    const [jobs, setJobs] = useState([]);
    const api = Api({}).init();
    const { currentItem, className = '' } = props;

    async function fetchJobs() {
        const response = await api.get('jobs', {
            custom: (job) => {
                return currentItem.slug === 'all' ? 1 : job.location.slug === currentItem.slug;
            },
        });
        setJobs(response);
    }

    useEffect(() => {
        fetchJobs();
    }, [currentItem]);

    const renderedJob = useMemo(() => {
        return jobs.map((job) => {
            return (
                <JobCard
                    key={job.id}
                    thumbnail={job.thumbnail}
                    title={job.title}
                    description={job.description}
                    salary={job.salary}
                    type={job.type}
                    locationType={job.locationType}
                />
            );
        });
    }, [jobs]);

    return (
        <div className={`grid gap-[15px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ${className}`}>
            {renderedJob}
        </div>
    );
}
const TabContent = React.memo(TabContentTemplate);

export default function TabSection() {

    const [currentTab, setCurrentTab] = useState({});
    const [locations, setLocations] = useState([]);
    const api = Api({}).init();

    const fetchLocations = async () => {
        const response = await api.get('locations');
        setLocations(response);
    }
    const items = useMemo(() => {
        const initialItems = [
            {
                key: 1,
                slug: 'all',
                label: <Button variant="contained" color={currentTab.key === 1 ? "primary" : "base"} className="py-[8px] px-24px] button-label">Tất cả</Button>,
                content: <TabContent currentItem={{ key: 1, slug: 'all' }} />
            }
        ]
        locations.forEach((item, i) => {
            initialItems.push({
                key: i + 2,
                slug: item.slug,
                label: <Button variant="contained" color={currentTab.key === i + 2 ? "primary" : "base"} className="py-[8px] px-24px] button-label">{item.name}</Button>,
                content: <TabContent currentItem={{ key: i + 2, slug: item.slug }} />
            })
        })
        return initialItems;
    }, [locations, currentTab])
    useEffect(() => {
        fetchLocations();
    }, [])

    useEffect(() => {
        setCurrentTab(items[0])
    }, [locations])
    
    return (
        <div className="container px-4 py-[64px]">
            <h1 className="heading-1 mb-4">Gợi ý <span className="text-primary">nổi bật</span></h1>
            <Tab
                onChange={setCurrentTab}
                currentItem={currentTab}
                bodyClass="mt-[32px]"
                headerClass="gap-x-2"
                items={items}
            />
        </div>
    )
}
