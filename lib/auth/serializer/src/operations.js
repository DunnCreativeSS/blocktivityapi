"use strict";

var _types = require("./types");

var _types2 = _interopRequireDefault(_types);

var _serializer = require("./serializer");

var _serializer2 = _interopRequireDefault(_serializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is merge updated from steemd's js_operation_serializer program.
/*

./js_operation_serializer |
sed 's/void/future_extensions/g'|
sed 's/steemit_protocol:://g'|
sed 's/14static_variantIJNS_12fixed_stringINSt3__14pairIyyEEEEEEE/string/g'|
sed 's/steemit_future_extensions/future_extensions/g'|
sed 's/steemit_protocol_//g' > tmp.coffee

*/
// coffee tmp.coffee # fix errors until you see: `ChainTypes is not defined`

// npm i -g decaffeinate
// decaffeinate tmp.coffee

// Merge tmp.js - See "Generated code follows" below

var uint16 = _types2.default.uint16,
    uint32 = _types2.default.uint32,
    int16 = _types2.default.int16,
    uint64 = _types2.default.uint64,
    string = _types2.default.string,
    string_binary = _types2.default.string_binary,
    bytes = _types2.default.bytes,
    bool = _types2.default.bool,
    array = _types2.default.array,
    static_variant = _types2.default.static_variant,
    map = _types2.default.map,
    set = _types2.default.set,
    public_key = _types2.default.public_key,
    time_point_sec = _types2.default.time_point_sec,
    optional = _types2.default.optional,
    asset = _types2.default.asset;


var future_extensions = _types2.default.void;
var hardfork_version_vote = _types2.default.void;
var version = _types2.default.void;

// Place-holder, their are dependencies on "operation" .. The final list of
// operations is not avialble until the very end of the generated code.
// See: operation.st_operations = ...
var operation = static_variant();
module.exports.operation = operation;

// For module.exports
var Serializer = function Serializer(operation_name, serilization_types_object) {
    var s = new _serializer2.default(operation_name, serilization_types_object);
    return module.exports[operation_name] = s;
};

var beneficiaries = new Serializer("beneficiaries", {
    account: string,
    weight: uint16
});

var comment_payout_beneficiaries = new Serializer(0, {
    beneficiaries: set(beneficiaries)
});

// Custom-types after Generated code

// ##  Generated code follows
// -------------------------------
/*
When updating generated code (fix closing notation)
Replace:  var operation = static_variant([
with:     operation.st_operations = [

Delete (these are custom types instead):
let public_key = new Serializer(
    "public_key",
    {key_data: bytes(33)}
);

let asset = new Serializer(
    "asset",
    {amount: int64,
    symbol: uint64}
);

Replace: authority.prototype.account_authority_map
With: map((string), (uint16))
*/
var signed_transaction = new Serializer("signed_transaction", {
    ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions),
    signatures: array(bytes(65))
});

var signed_block = new Serializer("signed_block", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([future_extensions, version, hardfork_version_vote])),
    witness_signature: bytes(65),
    transactions: array(signed_transaction)
});

var block_header = new Serializer("block_header", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([future_extensions, version, hardfork_version_vote]))
});

var signed_block_header = new Serializer("signed_block_header", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([future_extensions, version, hardfork_version_vote])),
    witness_signature: bytes(65)
});

var vote = new Serializer("vote", {
    voter: string,
    author: string,
    permlink: string,
    weight: int16
});

var comment = new Serializer("comment", {
    parent_author: string,
    parent_permlink: string,
    author: string,
    permlink: string,
    title: string,
    body: string,
    json_metadata: string
});

var transfer = new Serializer("transfer", {
    from: string,
    to: string,
    amount: asset,
    memo: string
});

var transfer_to_vesting = new Serializer("transfer_to_vesting", {
    from: string,
    to: string,
    amount: asset
});

var withdraw_vesting = new Serializer("withdraw_vesting", {
    account: string,
    vesting_shares: asset
});

var price = new Serializer("price", {
    base: asset,
    quote: asset
});

var authority = new Serializer("authority", {
    weight_threshold: uint32,
    account_auths: map(string, uint16),
    key_auths: map(public_key, uint16)
});

var account_create = new Serializer("account_create", {
    fee: asset,
    creator: string,
    new_account_name: string,
    owner: authority,
    active: authority,
    posting: authority,
    memo_key: public_key,
    json_metadata: string
});

var account_update = new Serializer("account_update", {
    account: string,
    owner: optional(authority),
    active: optional(authority),
    posting: optional(authority),
    memo_key: public_key,
    json_metadata: string
});

var chain_properties = new Serializer("chain_properties", {
    account_creation_fee: asset,
    maximum_block_size: uint32,
    sbd_interest_rate: uint16
});

var witness_update = new Serializer("witness_update", {
    owner: string,
    url: string,
    block_signing_key: public_key,
    props: chain_properties,
    fee: asset
});

var account_witness_vote = new Serializer("account_witness_vote", {
    account: string,
    witness: string,
    approve: bool
});

var account_witness_proxy = new Serializer("account_witness_proxy", {
    account: string,
    proxy: string
});

var custom = new Serializer("custom", {
    required_auths: set(string),
    id: uint16,
    data: bytes()
});

var delete_comment = new Serializer("delete_comment", {
    author: string,
    permlink: string
});

var custom_json = new Serializer("custom_json", {
    required_auths: set(string),
    required_posting_auths: set(string),
    id: string,
    json: string
});

var comment_options = new Serializer("comment_options", {
    author: string,
    permlink: string,
    max_accepted_payout: asset,
    allow_votes: bool,
    allow_curation_rewards: bool,
    extensions: set(static_variant([comment_payout_beneficiaries]))
});

var set_withdraw_vesting_route = new Serializer("set_withdraw_vesting_route", {
    from_account: string,
    to_account: string,
    percent: uint16,
    auto_vest: bool
});

var challenge_authority = new Serializer("challenge_authority", {
    challenger: string,
    challenged: string,
    require_owner: bool
});

var prove_authority = new Serializer("prove_authority", {
    challenged: string,
    require_owner: bool
});

var request_account_recovery = new Serializer("request_account_recovery", {
    recovery_account: string,
    account_to_recover: string,
    new_owner_authority: authority,
    extensions: set(future_extensions)
});

var recover_account = new Serializer("recover_account", {
    account_to_recover: string,
    new_owner_authority: authority,
    recent_owner_authority: authority,
    extensions: set(future_extensions)
});

var change_recovery_account = new Serializer("change_recovery_account", {
    account_to_recover: string,
    new_recovery_account: string,
    extensions: set(future_extensions)
});

var escrow_transfer = new Serializer("escrow_transfer", {
    from: string,
    to: string,
    sbd_amount: asset,
    steem_amount: asset,
    escrow_id: uint32,
    agent: string,
    fee: asset,
    json_meta: string,
    ratification_deadline: time_point_sec,
    escrow_expiration: time_point_sec
});

var escrow_dispute = new Serializer("escrow_dispute", {
    from: string,
    to: string,
    agent: string,
    who: string,
    escrow_id: uint32
});

var escrow_release = new Serializer("escrow_release", {
    from: string,
    to: string,
    agent: string,
    who: string,
    receiver: string,
    escrow_id: uint32,
    sbd_amount: asset,
    steem_amount: asset
});

var escrow_approve = new Serializer("escrow_approve", {
    from: string,
    to: string,
    agent: string,
    who: string,
    escrow_id: uint32,
    approve: bool
});

var custom_binary = new Serializer("custom_binary", {
    required_owner_auths: set(string),
    required_active_auths: set(string),
    required_posting_auths: set(string),
    required_auths: array(authority),
    id: string,
    data: bytes()
});

var decline_voting_rights = new Serializer("decline_voting_rights", {
    account: string,
    decline: bool
});

var claim_reward_balance = new Serializer("claim_reward_balance", {
    account: string,
    reward_steem: asset,
    reward_vests: asset
});

var delegate_vesting_shares = new Serializer("delegate_vesting_shares", {
    delegator: string,
    delegatee: string,
    vesting_shares: asset
});

var account_create_with_delegation = new Serializer("account_create_with_delegation", {
    fee: asset,
    delegation: asset,
    creator: string,
    new_account_name: string,
    owner: authority,
    active: authority,
    posting: authority,
    memo_key: public_key,
    json_metadata: string,
    extensions: set(future_extensions)
});

var author_reward = new Serializer("author_reward", {
    author: string,
    permlink: string,
    steem_payout: asset,
    vesting_payout: asset
});

var curation_reward = new Serializer("curation_reward", {
    curator: string,
    reward: asset,
    comment_author: string,
    comment_permlink: string
});

var comment_reward = new Serializer("comment_reward", {
    author: string,
    permlink: string,
    payout: asset
});

var fill_vesting_withdraw = new Serializer("fill_vesting_withdraw", {
    from_account: string,
    to_account: string,
    withdrawn: asset,
    deposited: asset
});

var shutdown_witness = new Serializer("shutdown_witness", { owner: string });

var hardfork = new Serializer("hardfork", { hardfork_id: uint32 });

var comment_payout_update = new Serializer("comment_payout_update", {
    author: string,
    permlink: string
});

var return_vesting_delegation = new Serializer("return_vesting_delegation", {
    account: string,
    vesting_shares: asset
});

var comment_benefactor_reward = new Serializer("comment_benefactor_reward", {
    benefactor: string,
    author: string,
    permlink: string,
    reward: asset
});

operation.st_operations = [vote, comment, transfer, transfer_to_vesting, withdraw_vesting, account_create, account_update, witness_update, account_witness_vote, account_witness_proxy, custom, delete_comment, custom_json, comment_options, set_withdraw_vesting_route, challenge_authority, prove_authority, request_account_recovery, recover_account, change_recovery_account, escrow_transfer, escrow_dispute, escrow_release, escrow_approve, custom_binary, decline_voting_rights, claim_reward_balance, delegate_vesting_shares, account_create_with_delegation, author_reward, curation_reward, comment_reward, fill_vesting_withdraw, shutdown_witness, hardfork, comment_payout_update, return_vesting_delegation, comment_benefactor_reward];

var transaction = new Serializer("transaction", {
    ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions)
});

//# -------------------------------
//#  Generated code end  S T O P
//# -------------------------------

// Custom Types (do not over-write)

var encrypted_memo = new Serializer("encrypted_memo", { from: public_key,
    to: public_key,
    nonce: uint64,
    check: uint32,
    encrypted: string_binary });
/*

// Make sure all tests pass

npm test

*/