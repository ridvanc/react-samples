import React, {useState, useEffect} from "react";
import {
    Button,
    Input,
    Row,
    InputGroup,
    InputGroupAddon,
    Table,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink
} from "reactstrap";
import Axios from "axios";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {closeLoading, openLoading} from "../../redux/actions/loadingActions";


const User = ({open, close}) => {
    const [search, setSearch] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const [pageData, setPageData] = useState({
        total_pages: 0,
        per_page: 6,
        page: 0,
        total: 0,
        data: []
    });
    const url = "https://reqres.in/api";
    const fetchUsers = () => {
        fetchUsersByPageNumber(pageNumber);
    };
    const fetchUsersByPageNumber = (page) => {
        open();
        let number = Object.assign(page, page);
        number = number + 1;
        Axios.get(`${url}/users?page=${number}`)
            .then(response => {
                close();
                setPageData(response.data);
            });
    };

    const clickPageNumber = (event, page) => {
        setPageNumber(page);
        fetchUsersByPageNumber(page);
    };

    const clickSearch = (event) => {
        setSearch(event.target.value);
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    return <>
        <h3>Users</h3>
        <hr/>
        <Row lg={12} sm={12} md={12} xl={12} xs={12}>
            <InputGroup>
                <Input placeholder="Search Users" className={"form-control form-control-lg"} value={search}
                       onChange={(event) => clickSearch(event)}/>
                <InputGroupAddon addonType="append">
                    <Button color="primary" onClick={() => clickSearch()}>Search</Button>
                </InputGroupAddon>
            </InputGroup>
        </Row>
        <Row lg={12} sm={12} md={12} xl={12} xs={12}>
            <Table striped={true}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Picture</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {
                    pageData.data.length > 0 ?
                        (
                            pageData.data.map(user => (
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>
                                        <Media object src={user.avatar} width={50}
                                               alt="Generic placeholder image"/>
                                    </td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>
                                        <Button tag={Link} outline color="primary"
                                                to={`/users/${user.id}`}
                                        >Edit</Button>
                                    </td>
                                </tr>
                            ))
                        ) :
                        (
                            <tr>
                                <td colSpan={5}>Record Not Found</td>
                            </tr>
                        )
                }
                </tbody>
            </Table>
            <Pagination aria-label="Page navigation example">
                <PaginationItem disabled={pageNumber === 0}
                                onClick={(event) => clickPageNumber(event, 0)}>
                    <PaginationLink first href="#"/>
                </PaginationItem>
                <PaginationItem disabled={pageNumber === 0}
                                onClick={(event) => clickPageNumber(event, pageNumber - 1)}>
                    <PaginationLink previous href="#"/>
                </PaginationItem>
                {[...Array(pageData.total_pages)].map((x, i) =>
                    <PaginationItem key={i} active={pageNumber === i}>
                        <PaginationLink href="#" onClick={(event) => clickPageNumber(event, i)}>
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                )}
                <PaginationItem disabled={(pageData.total_pages - 1) === pageNumber}>
                    <PaginationLink next onClick={(event) => clickPageNumber(event, pageNumber + 1)}/>
                </PaginationItem>
                <PaginationItem disabled={(pageData.total_pages - 1) === pageNumber}>
                    <PaginationLink last
                                    onClick={(event) => clickPageNumber(event, pageData.total_pages - 1)}/>
                </PaginationItem>
            </Pagination>
        </Row>
    </>;
};

function mapStateToProps(state) {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        open: () => {
            dispatch(openLoading());
        },
        close: () => {
            dispatch(closeLoading());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(User);